const getUrl = require('../lib/get-query-url')
const queryUrl = 'https://test.com'

test('Query and body not set should return null', () => {
  const url = getUrl({})
  expect(url).toBe(null)
})

test('Query set without url and body not set should return null', () => {
  const url = getUrl({
    query: {}
  })
  expect(url).toBe(null)
})

test('Query not set and body set without url should return null', () => {
  const url = getUrl({
    body: {}
  })
  expect(url).toBe(null)
})

test('Query set without url and body set without url should return null', () => {
  const url = getUrl({
    query: {},
    body: {}
  })
  expect(url).toBe(null)
})

test('Query set with url and body not set should return query url', () => {
  const url = getUrl({
    query: {
      url: queryUrl
    }
  })
  expect(url).toBe(queryUrl)
})

test('Query not set and body set with url should return query url', () => {
  const url = getUrl({
    body: {
      url: queryUrl
    }
  })
  expect(url).toBe(queryUrl)
})

test('Query set with url and body set with url should return query url', () => {
  const url = getUrl({
    query: {
      url: queryUrl
    },
    body: {
      url: queryUrl
    }
  })
  expect(url).toBe(queryUrl)
})
