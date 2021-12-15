const getTemplate = require('../lib/get-template')

const templates = {
  exact: ['schoolEmployee', 'student'],
  nonExact: ['SchoolemployEE', 'Student']
}

test('Existing template names (exact character match) returns GraphQL query', () => {
  templates.exact.forEach(template => {
    const query = getTemplate(template)
    expect(typeof query).toBe('string')
  })
})

test('Existing template names (non-exact character match) returns GraphQL query', () => {
  templates.nonExact.forEach(template => {
    const query = getTemplate(template)
    expect(typeof query).toBe('string')
  })
})

test('Non-existing template name throws an error', () => {
  const query = () => {
    getTemplate('personas')
  }
  expect(query).toThrow(Error)
})
