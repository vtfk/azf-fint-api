module.exports = {
  OAUTH: {
    clientId: process.env.OAUTH_CLIENT_ID || '',
    clientSecret: process.env.OAUTH_CLIENT_SECRET || '',
    accessTokenUri: process.env.OAUTH_IDP_URL,
    scopes: (process.env.OAUTH_SCOPES && process.env.OAUTH_SCOPES.split(','))
  },
  TOKEN_PARAMS: {
    username: process.env.OAUTH_USERNAME || '',
    password: process.env.OAUTH_PASSWORD || ''
  },
  GRAPHQL: {
    URL: process.env.GRAPHQL_URL,
    URL_BETA: process.env.GRAPHQL_URL_BETA
  }
}
