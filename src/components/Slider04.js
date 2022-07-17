import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, EffectFlip, Pagination } from 'swiper';

export default () => {
  return (
    <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} modules={[EffectFlip, Pagination, Navigation]} className="slider04">
      <SwiperSlide>
        <img src="img/screen01.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen02.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen03.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen04.png" />
      </SwiperSlide>
    </Swiper>
  );
};
