import { MdLocationPin } from "react-icons/md"
import WeatherDetails from "./WeatherDetails"

const WeatherNow = ({ weatherData }) => {

  return (
    <section className="weather-card">
      <div className="weather-now">
        <img src={`/src/assets/icons/${weatherData.weather[0].icon}.png`} alt="weather icon" />     
        <div>
          <p id="now-temp">{Math.round(weatherData.main.temp) + "\u02da"}</p>
          <p>{weatherData.weather[0].description}</p>
          <div className="location">
            <MdLocationPin />
            <p>{weatherData.name}, {weatherData.sys.country}</p>
          </div>
        </div>
      </div>
      <WeatherDetails weatherData={weatherData}/>
    </section>
  )
}

export default WeatherNow