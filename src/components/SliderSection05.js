import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

const SliderSection05 = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 6,
        },
      }}
      loop={true}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className="slider01"
    >
      <SwiperSlide>
        <img className="p-12 shadow-xl rounded-32" src="img/p_screen_store_1.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="p-12 shadow-xl rounded-32" src="img/p_screen_store_2.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="p-12 shadow-xl rounded-32" src="img/p_screen_store_3.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="p-12 shadow-xl rounded-32" src="img/p_screen_store_4.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="p-12 shadow-xl rounded-32" src="img/p_screen_store_5.png" alt=""></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSection05;
