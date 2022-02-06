const { logger, logConfig } = require('@vtfk/logger')
const { create: roadRunner } = require('@vtfk/e18')
const withTokenAuth = require('../lib/with-token-auth')
const { TIMEOUT } = require('../config')
const { isNetworkTimeout, networkTimeoutMessage } = require('../lib/network-timeout')
const HTTPError = require('../lib/http-error')
const processQuery = require('../lib/GraphQL/process-graphql-query')
const getTemplate = require('../lib/get-template')
const getResponse = require('../lib/get-response')

const handleQuery = async (context, req) => {
  if (!req || !req.body || (!req.body.query && !req.body.template) || !req.body.variables) {
    logger('error', ['graphql', 'Invalid request'])
    await roadRunner(req, { status: 'failed', error: 'Invalid request' }, context)
    return new HTTPError(500, 'Invalid request').toJSON()
  }

  const { template, variables, options } = req.body
  const timeout = req.body?.timeout || TIMEOUT
  let { query } = req.body

  logConfig({
    prefix: `graphql - ${template ? `template - ${template}` : 'query'}`
  })

  try {
    logger('info', ['start', 'timeout', timeout])
    if (template) { query = getTemplate(template) }
    const body = await processQuery(query, variables || {}, options, timeout)
    logger('info', ['finished', Array.isArray(body) ? body.length : 1])
    await roadRunner(req, { status: 'completed', data: body }, context)
    return getResponse(body)
  } catch (error) {
    logger('error', [error])
    if (isNetworkTimeout(error.message)) {
      await roadRunner(req, { status: 'failed', error, message: networkTimeoutMessage(timeout) }, context)
      return new HTTPError(500, networkTimeoutMessage(timeout)).toJSON()
    } else {
      await roadRunner(req, { status: 'failed', error, message: error.message }, context)
      return new HTTPError(400, error.message).toJSON()
    }
  }
}

module.exports = (context, req) => withTokenAuth(context, req, handleQuery)
