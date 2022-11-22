import { WiHumidity, WiStrongWind, WiThermometer, WiBarometer } from "react-icons/wi";

const WeatherDetails = ({ weatherData }) => {
  const details = [
    { name: "Feels like", data: Math.round(weatherData.main.feels_like) + " \u2103", icon: <WiThermometer /> },
    { name: "Humidity", data: weatherData.main.humidity + "%", icon: <WiHumidity /> },
    { name: "Pressure", data: weatherData.main.pressure + " hPa", icon: <WiBarometer /> },
    { name: "Wind speed", data: weatherData.wind.speed + " m/s", icon: <WiStrongWind /> },
  ]

  return (
    <div className="weather-details">
      {details.map((detail, index) => (
        <div key={index}>
          {detail.icon}
          <p>{detail.name}</p>
          <p>{detail.data}</p>
        </div>
      ))}
    </div>
  )
}

export default WeatherDetails