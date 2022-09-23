import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';
import TitleSlider from './TitleSlider';
import VideoSlider from './VideoSlider';
const Slidermain = () => {
  return (
    <Swiper
      autoplay={{
        delay: 1000000,
        disableOnInteraction: false,
      }}
      slidesPerView={'1'}
      centeredSlides={true}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      className="slider00"
    >
      <SwiperSlide>
        <VideoSlider
          textcolor1="text-white"
          textcolor2="text-white"
          c_title1="3.0 Update"
          c_title2="Coming Petsonal"
          c_body1="POOD is Next-generation pet commerce"
          c_buttonName="Get Started"
          vurl="video/p_video_app.mp4"
          url="https://pood.onelink.me/kQDJ/mqn86vma"
          mimg="bg-slider_new"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <TitleSlider
          textcolor1="text-white"
          textcolor2="text-white"
          c_title1="3.0 Showcase"
          c_title2="What is your petsonal"
          c_body1="August 19, The future of Pet technology"
          c_buttonName="has ended"
          c_bgColor="bg-[#fff]"
          c_bgImg="bg-slider_jinhan bg-cover bg-center"
          c_bgVideo=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoSlider
          textcolor1="text-white"
          textcolor2="text-white"
          c_title1="Upcoming"
          c_title2="My pet MBTI"
          c_body1="For dreamers..."
          c_buttonName="Available on October"
          vurl="video/p_video_dream.mp4"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <TitleSlider
          textcolor1="text-white"
          textcolor2="text-white"
          c_title1="We're hiring"
          c_title2="Backend Developer"
          c_body1="We are all astronauts who explore the universe"
          c_buttonName="Apply now"
          c_bgColor="bg-[#fff]"
          c_bgImg="bg-slider_career bg-cover bg-center"
          c_bgVideo=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slidermain;
