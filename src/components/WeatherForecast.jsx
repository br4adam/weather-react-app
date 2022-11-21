import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const WeatherForecast = ({ forecastData }) => {

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        type: "progressbar"
      }}
      spaceBetween={8}
      speed={100}
      className="swiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 4,
        }
      }}
    >
      {forecastData && forecastData.map(item => 
        <SwiperSlide key={item.dt} className="forecast-card">
          <p>{Math.round(item.main.temp)} {'\u2103'}</p>
          <img src={`./src/assets/icons/${item.weather[0].icon}.png`} alt="weather icon" />
          <p>{item.dt_txt.slice(5,16)}</p>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default WeatherForecast