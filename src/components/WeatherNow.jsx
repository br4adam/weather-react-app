const WeatherNow = ({ weatherData }) => {

  const weatherDetails = [
    { name: "Feels like", data: Math.round(weatherData.main.feels_like) + " \u2103" },
    { name: "Humidity", data: weatherData.main.humidity + "%" },
    { name: "Pressure", data: weatherData.main.pressure + " hPa" },
    { name: "Wind speed", data: weatherData.wind.speed + " m/s" },
  ]

  return (
    <div className="weather-card">
      <div className="weather-now">
        <img src={`./src/assets/icons/${weatherData.weather[0].icon}.png`} alt="weather icon" />     
        <div>
          <p id="now-temp">{Math.round(weatherData.main.temp)}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.name}, {weatherData.sys.country}</p>
        </div>
      </div>
      <div className="weather-details">
        {weatherDetails.map(detail => (
          <div>
            <p>{detail.name}</p>
            <p>{detail.data}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherNow