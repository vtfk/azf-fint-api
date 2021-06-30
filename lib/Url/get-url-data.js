const axios = require('axios').default
const { logger } = require('@vtfk/logger')
const getResponse = require('../get-response')
const HTTPError = require('../http-error')

module.exports = async (accessToken, url) => {
  logger('info', ['get-url-data', url])

  const options = {
    headers: {
      Authorization: `Bearer: ${accessToken}`
    }
  }

  try {
    const { data } = await axios.get(url, options)
    return getResponse(data)
  } catch (error) {
    logger('error', ['get-url-data', error])
    console.log(error)
    return new HTTPError(404, error.message).toJSON()
  }
}
