import { useEffect, useState } from "react"
import Searchbar from "./components/Searchbar"
import WeatherNow from "./components/WeatherNow"
import WeatherForecast from "./components/WeatherForecast"

const App = () => {
  const [ weatherData, setWeatherData ] = useState({})
  const [ forecastData, setForecastData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ city, setCity ] = useState("Budapest")
  const [ theme, setTheme ] = useState("light")

  const api = {
    url: "https://api.openweathermap.org/data/2.5",
    key: import.meta.env.VITE_API_KEY
  }

  const urls = [
    `${api.url}/weather?q=${city}&units=metric&appid=${api.key}`,
    `${api.url}/forecast?q=${city}&units=metric&appid=${api.key}`
  ]

  const colorThemeSwitcher = (response) => {
    const daytime = response[0].weather[0].icon[2]
    daytime === "d" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
        )
        console.log(response)
        setWeatherData(response[0])
        setForecastData(response[1].list)
        colorThemeSwitcher(response)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  },[city])

  return (
    <div className="container" data-theme={theme}>
      <div className="wrapper">
        <Searchbar setCity={setCity} isLoading={isLoading}/>
          { weatherData.main && forecastData
            ? (
              <>
                <WeatherNow weatherData={weatherData} />
                <WeatherForecast forecastData={forecastData} theme={theme}/>
              </>
            )
            : <p className="notification">{isLoading ? "Loading..." : "No data found..."}</p>
          }
      </div>
    </div>
  )
}

export default App