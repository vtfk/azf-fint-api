const getTemplate = require('../lib/get-template')

test('Existing template name (exact character match) returns GraphQL query', () => {
  const query = getTemplate('person')
  expect(typeof query).toBe('string')
})

test('Existing template name (non-exact character match) returns GraphQL query', () => {
  const query = getTemplate('PeRsOn')
  expect(typeof query).toBe('string')
})

test('Non-existing template name throws an error', () => {
  const query = () => {
    getTemplate('personas')
  }
  expect(query).toThrow(Error)
})
