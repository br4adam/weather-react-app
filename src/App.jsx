import { useEffect, useState } from "react"
import Searchbar from "./components/Searchbar"
import WeatherNow from "./components/WeatherNow"
import WeatherForecast from "./components/WeatherForecast"

const App = () => {
  const [ weatherData, setWeatherData ] = useState({})
  const [ forecastData, setForecastData ] = useState([])
  const [ city, setCity ] = useState("Budapest")

  const api = {
    url: "https://api.openweathermap.org/data/2.5",
    key: import.meta.env.VITE_API_KEY
  }

  const urls = [
    `${api.url}/weather?q=${city}&units=metric&appid=${api.key}`,
    `${api.url}/forecast?q=${city}&units=metric&appid=${api.key}`
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
        )
        console.log(response)
        setWeatherData(response[0])
        setForecastData(response[1].list)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [city])

  return (
    <div className="container">
      <Searchbar setCity={setCity}/>
      <main>
        { weatherData.main && forecastData
          ? (
            <>
              <WeatherNow weatherData={weatherData} />
              <WeatherForecast forecastData={forecastData} />
            </>
          )
          : <p>Not found...</p>
        }
      </main>
    </div>
  )
}

export default App