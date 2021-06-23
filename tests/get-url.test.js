require('./lib/mock-envs')()
const getUrl = require('../lib/get-url')
const { GRAPHQL: { URL, URL_BETA } } = require('../config')

test('Options not set returns production url', () => {
  const url = getUrl()
  expect(url).toBe(URL)
})

test('Empty options returns production url', () => {
  const url = getUrl({})
  expect(url).toBe(URL)
})

test('Options with beta set to 1 returns production url', () => {
  const url = getUrl({
    beta: 1
  })
  expect(url).toBe(URL)
})

test('Options with beta set to 0 returns production url', () => {
  const url = getUrl({
    beta: 0
  })
  expect(url).toBe(URL)
})

test('Options with beta set to empty string returns production url', () => {
  const url = getUrl({
    beta: ''
  })
  expect(url).toBe(URL)
})

test('Options with beta set to null returns production url', () => {
  const url = getUrl({
    beta: null
  })
  expect(url).toBe(URL)
})

test('Options with beta set to undefined returns production url', () => {
  const url = getUrl({
    beta: undefined
  })
  expect(url).toBe(URL)
})

test('Options with beta set to false returns production url', () => {
  const url = getUrl({
    beta: false
  })
  expect(url).toBe(URL)
})

test('Options with beta set to true returns beta url', () => {
  const url = getUrl({
    beta: true
  })
  expect(url).toBe(URL_BETA)
})
