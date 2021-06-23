module.exports = () => {
  process.env = Object.assign(process.env, {
    GRAPHQL_URL: 'https://api.felleskomponent.no/graphql/graphql',
    GRAPHQL_URL_BETA: 'https://beta.felleskomponent.no/graphql/graphql'
  })
}
