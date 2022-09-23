import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';
import TitleSlider from './TitleSlider';
import VideoSlider from './VideoSlider';
const Sliderbenefit = () => {
  return (
    <Swiper spaceBetween={32} className="slider05">
      <SwiperSlide>
        <div className="w-full h-full bg-white shadow-xl rounded-24">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="px-24 py-32" src="img/p_coin.png"></img>
            </div>
            <div className="px-48 pb-36">
              <p className="font-bold font-Jakarta text-md3">2% payback</p>
              <p className="font-regular font-Jakarta text-md1 text-neutral-500">every payments</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="w-full h-full bg-white shadow-xl rounded-24">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="px-24 py-32" src="img/p_couponpack.png"></img>
            </div>
            <div className="px-48 pb-36">
              <p className="font-bold font-Jakarta text-md3">Bundles of coupon</p>
              <p className="font-regular font-Jakarta text-md1 text-neutral-500">7 coupons</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="w-full h-full bg-white shadow-xl rounded-24">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="px-24 py-32" src="img/p_delivery.png"></img>
            </div>
            <div className="px-48 pb-36">
              <p className="font-bold font-Jakarta text-md3">Free delivery</p>
              <p className="font-regular font-Jakarta text-md1 text-neutral-500">every order</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="w-full h-full bg-white shadow-xl rounded-24">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="px-24 py-32" src="img/p_coupon.png"></img>
            </div>
            <div className="px-48 pb-36">
              <p className="font-bold font-Jakarta text-md3">Pet Coupon</p>
              <p className="font-regular font-Jakarta text-md1 text-neutral-500">When registering your pet</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="w-full h-full bg-white shadow-xl rounded-24">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="px-24 py-32" src="img/p_photo.png"></img>
            </div>
            <div className="px-48 pb-36">
              <p className="font-bold font-Jakarta text-md3">500 points</p>
              <p className="font-regular font-Jakarta text-md1 text-neutral-500">Photo review</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliderbenefit;
