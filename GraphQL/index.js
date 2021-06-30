const { logger, logConfig } = require('@vtfk/logger')
const withTokenAuth = require('../lib/with-token-auth')
const HTTPError = require('../lib/http-error')
const processQuery = require('../lib/GraphQL/process-graphql-query')
const getTemplate = require('../lib/get-template')
const getResponse = require('../lib/get-response')

const handleQuery = async (context, req) => {
  if (!req || !req.body || (!req.body.query && !req.body.template) || !req.body.variables) {
    logger('error', ['graphql', 'Invalid request'])
    return new HTTPError(500, 'Invalid request').toJSON()
  }

  const { template, variables, options } = req.body
  let { query } = req.body

  logConfig({
    prefix: `graphql - ${template ? 'template' : 'query'}`
  })

  try {
    logger('info', ['start'])
    if (template) { query = getTemplate(template) }
    const body = await processQuery(query, variables || {}, options)
    logger('info', ['finished', Array.isArray(body) ? body.length : 1])
    return getResponse(body)
  } catch (error) {
    logger('error', [error])
    return new HTTPError(400, error.message).toJSON()
  }
}

module.exports = (context, req) => withTokenAuth(context, req, handleQuery)
