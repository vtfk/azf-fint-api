const ClientOAuth2 = require('client-oauth2')
const { OAUTH, TOKEN_PARAMS: { username, password } } = require('../../config')

module.exports = () => {
  return new Promise((resolve, reject) => {
    new ClientOAuth2(OAUTH).owner.getToken(username, password)
      .then(({ accessToken }) => resolve(accessToken))
      .catch(error => reject(error))
  })
}
