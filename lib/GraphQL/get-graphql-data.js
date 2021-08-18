const { GraphQLClient } = require('graphql-request')
const { logger } = require('@vtfk/logger')
const getUri = require('../get-fint-url')

module.exports = async (accessToken, query, variables, options, timeout) => {
  const uri = getUri(options)
  logger('info', ['get-data', 'uri', uri])

  const client = new GraphQLClient(uri, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json'
    },
    timeout
  })

  return await client.request(query, variables)
}
