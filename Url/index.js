const { logger, logConfig } = require('@vtfk/logger')
const { create: roadRunner } = require('@vtfk/e18')
const withTokenAuth = require('../lib/with-token-auth')
const { TIMEOUT } = require('../config')
const getUrl = require('../lib/get-query-url')
const HTTPError = require('../lib/http-error')
const processQuery = require('../lib/Url/process-url-query')

const queryUrl = async (context, req) => {
  logConfig({
    prefix: 'url'
  })

  const url = getUrl(req)
  const timeout = req.body?.timeout || TIMEOUT
  if (!url) {
    await roadRunner(req, { status: 'failed', error: 'Missing url' }, context)
    return new HTTPError(400, 'Missing url').toJSON()
  }

  logger('info', ['start', 'timeout', timeout])
  const result = await processQuery(url, timeout)
  await roadRunner(req, { status: 'completed', data: result.body }, context)
  logger('info', ['finished'])
  return result
}

module.exports = (context, req) => withTokenAuth(context, req, queryUrl)
