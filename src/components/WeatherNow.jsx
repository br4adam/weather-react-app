const WeatherNow = ({ weatherData }) => {
  return (
    <>
      <div className="weather-card">
        <p>{weatherData.name}, {weatherData.sys.country}</p>
        <p>{Math.round(weatherData.main.temp)}</p>
        <p>Feels like {Math.round(weatherData.main.feels_like)}</p>
      </div>
    </>
  )
}

export default WeatherNow