import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/mousewheel"

const WeatherForecast = ({ forecastData, theme }) => {

  const iconTheme = theme === "light" ? "d" : "n"

  return (
    <>
      <p className="title">5-day forecast</p>
      <Swiper
        modules={[Pagination, Mousewheel]}
        pagination={{
          type: "progressbar"
        }}
        spaceBetween={8}
        speed={250}
        mousewheel={true}
        simulateTouch={true}
        className="swiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          667: {
            slidesPerView: 4,
          }
        }}
      >
        {forecastData && forecastData.map(item => 
          <SwiperSlide key={item.dt} className="forecast-card">
            <p>{Math.round(item.main.temp)} {'\u2103'}</p>
            <img src={`/src/assets/icons/${item.weather[0].icon.slice(0,2) + iconTheme}.png`} alt="weather icon" />
            <p>{item.dt_txt.slice(5,16)}</p>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

export default WeatherForecast