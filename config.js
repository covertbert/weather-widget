const config = {
  API_URL:
    process.env.NODE_ENV === 'development'
      ? 'https://dark-sky-endpoint.bertieblackman.co.uk'
      : 'https://dark-sky-endpoint.bertieblackman.co.uk'
}

export default config
