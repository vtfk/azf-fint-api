const { GraphQLClient } = require('graphql-request')
const { logger } = require('@vtfk/logger')
const { GRAPHQL: { URL_BETA } } = require('../../config')

const getUri = options => {
  /* TODO: Validate beta query before set in production!
  return options ? `${options.beta}`.toLowerCase() === 'true' ? URL_BETA : URL : URL */
  return URL_BETA
}

module.exports = async (accessToken, query, variables, options) => {
  const uri = getUri(options)
  logger('info', ['get-data', 'uri', uri])

  const client = new GraphQLClient(uri, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json'
    }
  })

  return await client.request(query, variables)
}
