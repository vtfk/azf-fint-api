const { readdirSync } = require('fs')
const { join } = require('path')
const templatePath = join(__dirname, '../data/GraphQL/schema')

const getTemplate = template => readdirSync(templatePath).find(name => name === `${template.toLowerCase()}.js`)

module.exports = template => {
  const templateName = getTemplate(template)
  if (!templateName) throw new Error(`Template with name '${template}' not found`)
  return require(`${templatePath}/${templateName}`).query
}
