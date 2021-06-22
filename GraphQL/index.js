const { logger, logConfig } = require('@vtfk/logger')
const response = require('../lib/response')
const processQuery = require('../lib/GraphQL/process-graphql-query')
const getTemplate = require('../lib/get-template')

module.exports = async (context, req) => {
  if (!req || !req.body || (!req.body.query && !req.body.template) || !req.body.variables) {
    logger('error', ['graphql', 'Invalid request'])
    return response('Invalid request', 500)
  }

  const { template, variables, options } = req.body
  let { query } = req.body

  logConfig({
    prefix: `graphql - ${template ? 'template' : 'query'}`
  })

  try {
    logger('info', ['start'])
    if (template) { query = getTemplate(template) }
    const data = await processQuery(query, variables || {}, options)
    logger('info', ['finished', Array.isArray(data) ? data.length : 1])
    return response(data)
  } catch (error) {
    logger('error', [error])
    return response(error, 400)
  }
}
