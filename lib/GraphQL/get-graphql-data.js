const { GraphQLClient } = require('graphql-request')
const { logger } = require('@vtfk/logger')
const getUri = require('../get-url')

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
