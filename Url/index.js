const withTokenAuth = require('../lib/with-token-auth')
const { logger, logConfig } = require('@vtfk/logger')
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
  if (!url) return new HTTPError(400, 'Missing url').toJSON()

  logger('info', ['start', 'timeout', timeout])
  const result = await processQuery(url, timeout)
  logger('info', ['finished'])
  return result
}

module.exports = (context, req) => withTokenAuth(context, req, queryUrl)
