const getAccessToken = require('../get-fint-access-token')
const getData = require('./get-graphql-data')

module.exports = async (query, variables, options) => {
  const accessToken = await getAccessToken()
  return await getData(accessToken, query, variables, options)
}
