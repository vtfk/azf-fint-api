const getResponse = require('../lib/response')

const data = {
  person: {
    fornavn: 'Rune Moskvil',
    mellomnavn: null,
    etternavn: 'Lyngås'
  }
}
const error = new Error("Template with name 'personas' not found")
const errorStatus = 400

test('Data returns correct response', () => {
  const response = getResponse(data)
  expect(typeof response).toBe('object')
  expect(response.status).toBe(200)
  expect(response.headers['Content-Type']).toBe('application/json')
  expect(response.body.person.fornavn).toBe(data.person.fornavn)
})

test('Error returns correct response', () => {
  const response = getResponse(error, errorStatus)
  expect(typeof response).toBe('object')
  expect(response.status).toBe(errorStatus)
  expect(response.headers['Content-Type']).toBe('application/json')
  expect(response.body.message).toBe(error.message)
})
