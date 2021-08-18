const { WHITELIST: { URL, URL_BETA } } = require('../../config')
const { logger } = require('@vtfk/logger')
const HTTPError = require('../http-error')
const getAccessToken = require('../get-fint-access-token')
const getData = require('./get-url-data')

module.exports = async (url, timeout) => {
  if (!url.toLowerCase().startsWith(URL) && !url.toLowerCase().startsWith(URL_BETA)) {
    logger('warn', ['process-url-query', url, 'is not whitelisted'])
    return new HTTPError(401, 'URL is not allowed').toJSON()
  }
  const accessToken = await getAccessToken()
  return await getData(accessToken, url, timeout)
}
