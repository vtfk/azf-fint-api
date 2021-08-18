const isNetworkTimeout = message => /(network timeout at)|(timeout.+exceeded)/.test(message)
const networkTimeoutMessage = timeout => `Request to FINT canceled due to timeout after ${timeout / 1000} seconds`

module.exports = {
  isNetworkTimeout,
  networkTimeoutMessage
}
