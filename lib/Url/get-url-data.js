const axios = require('axios').default
const { logger } = require('@vtfk/logger')
const getResponse = require('../get-response')
const { invalidMessage, isInvalid, isNetworkTimeout, networkTimeoutMessage } = require('../errors')
const HTTPError = require('../http-error')

module.exports = async (accessToken, url, timeout) => {
  logger('info', ['get-url-data', url])

  const options = {
    headers: {
      Authorization: `Bearer: ${accessToken}`
    }
  }

  const instance = axios.create({
    timeout
  })

  try {
    const { data } = await instance.get(url, options)
    return getResponse(data)
  } catch (error) {
    logger('error', ['get-url-data', error])
    if (isNetworkTimeout(error.message)) {
      return new HTTPError(500, networkTimeoutMessage(timeout)).toJSON()
    } else if (isInvalid(error.message)) {
      return new HTTPError(500, invalidMessage(error.message)).toJSON()
    } else return new HTTPError(404, error.message).toJSON()
  }
}
