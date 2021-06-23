const { GRAPHQL: { URL, URL_BETA } } = require('../config')

module.exports = options => {
  return options ? `${options.beta}`.toLowerCase() === 'true' ? URL_BETA : URL : URL
}
