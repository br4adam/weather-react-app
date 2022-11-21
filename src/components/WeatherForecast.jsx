const WeatherForecast = ({ forecastData }) => {
  return (
    forecastData && forecastData.map(item => 
      <div key={item.dt} className="forecast-card">
        <p>{item.dt_txt.slice(5,16)}</p>
        <p>{Math.round(item.main.temp)}</p>
      </div>
    )
  )
}

export default WeatherForecast