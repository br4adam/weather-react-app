import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel } from "swiper"
import convertDate from "../utils/convertDate.js"
import getIconUrl from "../utils/getIconUrl.js"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/mousewheel"

const Forecast = ({ forecastData, theme }) => {
  return (
    <>
      <p className="mid-title">5-day forecast</p>
      <Swiper
        modules={[Pagination, Mousewheel]}
        pagination={{
          type: "progressbar"
        }}
        spaceBetween={8}
        speed={150}
        mousewheel={true}
        simulateTouch={true}
        className="swiper"
        breakpoints={{
          0: {slidesPerView: 2},
          576: {slidesPerView: 4}
        }}
      >
        {forecastData && forecastData.map(item => 
          <SwiperSlide key={item.dt} className="forecast-card">
            <p>{Math.round(item.main.temp)}{' \u2103'}</p>
            <img src={getIconUrl(item, theme)} alt="forecast icon" />
            <p>{convertDate(item.dt_txt)}</p>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

export default Forecast