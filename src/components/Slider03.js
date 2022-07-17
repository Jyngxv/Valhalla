import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/swiper.css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper";

export default () => {
  return (
    <Swiper
      effect={"cards"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="slider03"
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
