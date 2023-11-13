import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper/modules';
import './Slider.css'


const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{delay: 4000}}
        mousewheel={true}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>

          </div>
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Slider