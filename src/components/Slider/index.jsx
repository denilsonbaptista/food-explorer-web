import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from './styles.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Slider({ settings, children }) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        {...settings}
        className="swiper-carrosel"
      >
        {children}
      </Swiper>
    </Container>
  )
}

export { Slider, SwiperSlide as Slide }
