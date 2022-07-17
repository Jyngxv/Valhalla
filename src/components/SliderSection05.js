import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

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
          slidesPerView: 4.5,
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
        <img src="img/screen01.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen02.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen03.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen04.png" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen05.png" alt=""></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSection05;
