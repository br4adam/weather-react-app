const createEndpoint = (city, unit) => {
  const api = {
    url: "https://api.openweathermap.org/data/2.5",
    key: import.meta.env.VITE_API_KEY
  }
  const dataTypes = ["weather", "forecast"]
  return dataTypes.map(type => `${api.url}/${type}?q=${city}&units=${unit}&appid=${api.key}`)
}

export default createEndpoint