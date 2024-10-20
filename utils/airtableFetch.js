const airtableFetch = async (url, options = {}) => {
  const baseURL = `https://api.airtable.com/v0/${process.env.BASE_ID}/`

  const method = options.method || 'GET'
  const headers = {
    Authorization: `Bearer ${process.env.AIRTABLE_BEARER_TOKEN}`,
    'Content-Type': 'application/json',
    ...options.headers,
  }
  const next = options.next || {}

  const fetchOptions = {
    method,
    headers,
    next,
  }

  if (['POST', 'PATCH', 'PUT'].includes(method.toUpperCase())) {
    fetchOptions.body = JSON.stringify(options.body)
  }

  const response = await fetch(baseURL + url, fetchOptions)

  return response.json()
}

export default airtableFetch
