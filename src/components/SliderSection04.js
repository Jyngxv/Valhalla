import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';

const SliderSection04 = () => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={[true]}
      modules={[Autoplay]}
      className="slider02"
    >
      <SwiperSlide>
        <img src="img/p_screen_summary_01.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p_screen_summary_0.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p_screen_summary_05.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p_screen_summary_0.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p_screen_summary_03.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p_screen_summary_04.jpg" alt=""></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSection04;
