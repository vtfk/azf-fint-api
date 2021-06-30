module.exports = req => {
  if (req.query?.url) return req.query.url
  else if (req.body?.url) return req.body.url
  return null
}
