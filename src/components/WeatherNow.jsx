import { MdLocationPin } from "react-icons/md"
import { WiHumidity, WiStrongWind, WiThermometer, WiWindy } from "react-icons/wi";

const WeatherNow = ({ weatherData }) => {

  const weatherDetails = [
    { name: "Feels like", data: Math.round(weatherData.main.feels_like) + " \u2103", icon: <WiThermometer /> },
    { name: "Humidity", data: weatherData.main.humidity + "%", icon: <WiHumidity /> },
    { name: "Pressure", data: weatherData.main.pressure + " hPa", icon: <WiWindy /> },
    { name: "Wind speed", data: weatherData.wind.speed + " m/s", icon: <WiStrongWind /> },
  ]

  return (
    <div className="weather-card">
      <div className="weather-now">
        <img src={`./src/assets/icons/${weatherData.weather[0].icon}.png`} alt="weather icon" />     
        <div>
          <p id="now-temp">{Math.round(weatherData.main.temp) + "\u02da"}</p>
          <p>{weatherData.weather[0].description}</p>
          <div className="location">
            <MdLocationPin />
            <p>{weatherData.name}, {weatherData.sys.country}</p>
          </div>
        </div>
      </div>
      <div className="weather-details">
        {weatherDetails.map((detail, index) => (
          <div key={index}>
            {detail.icon}
            <p>{detail.name}</p>
            <p>{detail.data}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherNow