const withTokenAuth = require('../lib/with-token-auth')
const { logger, logConfig } = require('@vtfk/logger')
const getUrl = require('../lib/get-query-url')
const HTTPError = require('../lib/http-error')
const processQuery = require('../lib/Url/process-url-query')

const queryUrl = async (context, req) => {
  logConfig({
    prefix: 'url'
  })

  const url = getUrl(req)
  if (!url) return new HTTPError(400, 'Missing url').toJSON()

  logger('info', ['start'])
  const result = await processQuery(url)
  logger('info', ['finished'])
  return result
}

module.exports = (context, req) => withTokenAuth(context, req, queryUrl)
