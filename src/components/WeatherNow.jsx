import { MdLocationPin } from "react-icons/md"
import WeatherDetails from "./WeatherDetails"

const WeatherNow = ({ weatherData }) => {

  return (
    <main>
      <section className="weather-now">
        <div className="image-wrapper">
          <img src={`/src/assets/icons/${weatherData.weather[0].icon}.png`} alt="weather icon" />
        </div>
        <div className="data-wrapper">
          <p id="now-temp">{Math.round(weatherData.main.temp) + "\u02da"}</p>
          <p>{weatherData.weather[0].description}</p>
          <div className="location">
            <MdLocationPin />
            <p>{weatherData.name}, {weatherData.sys.country}</p>
          </div>
        </div>
      </section>
      <WeatherDetails weatherData={weatherData}/>
    </main>
  )
}

export default WeatherNow