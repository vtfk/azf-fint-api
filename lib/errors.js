const isInvalid = message => isNonNullable(message)

const isNetworkTimeout = message => /(network timeout at)|(timeout.+exceeded)/.test(message)
const networkTimeoutMessage = timeout => `Request to FINT canceled due to timeout after ${timeout / 1000} seconds`
const invalidMessage = message => `Response from FINT was invalid: ${message}`

const isNonNullable = message => /(Cannot return null for non-nullable type:.+)/.test(message)

module.exports = {
  invalidMessage,
  isInvalid,
  isNetworkTimeout,
  networkTimeoutMessage
}
