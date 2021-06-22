module.exports = (data, status = 200) => {
  const response = {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (data instanceof Error) {
    response.body = {
      message: data.message
    }
  } else {
    response.body = data
  }

  return response
}
