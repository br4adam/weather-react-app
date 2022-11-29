import { useEffect, useState } from "react"
import Searchbar from "./components/Searchbar"
import WeatherNow from "./components/WeatherNow"
import Forecast from "./components/Forecast"
import getColorScheme from "./utils/getColorScheme.js"
import createEndpoint from "./utils/createEndpoint.js"

const App = () => {
  const [ weatherData, setWeatherData ] = useState({})
  const [ forecastData, setForecastData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ city, setCity ] = useState("Budapest")
  const [ theme, setTheme ] = useState("light")

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await Promise.all(
          createEndpoint(city, "metric").map(url => fetch(url).then(res => res.json()))
        )
        console.log(response)
        setWeatherData(response[0])
        setForecastData(response[1].list)
        setTheme(getColorScheme(response))
      } catch (error) {
        console.log(error)
      } finally {
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
            ?
              <>
                <WeatherNow weatherData={weatherData} />
                <Forecast forecastData={forecastData} theme={theme}/>
              </>
            : <p className="notification">{isLoading ? "Loading..." : "No data found..."}</p>
          }
      </div>
    </div>
  )
}

export default App