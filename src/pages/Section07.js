import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import SliderSection05 from '../components/SliderSection05';
import '../App.css';
import { motion } from 'framer-motion';
const Section07 = () => {
  return (
    <section className="bg-black">
      <div className="container px-24 pb-0 py-128 md:px-48 md:pt-160 xl:px-0 xl:pt-192">
        <div className="mb-64 md:mb-96 xl:mb-128 xl:w-50%">
          <TitleHeadline
            textcolor1="text-white"
            textcolor2="text-white"
            textcolor3="text-neutral-500"
            c_headline1="사료부터 용품까지"
            c_headline2="빈틈없는 맞춤 추천"
            c_body1="사료, 간식, 영양제, 용품까지 나의 고민을 완벽히 이해한 맞춤형 추천, 거기에 가장 잘 맞는 상품들만 모아서 추천해주는 패키지까지."
            // c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
          />
        </div>
      </div>
      <div className="pl-24 overflow-x-auto pb-128 whitespace-nowrap md:hidden">
        <div className="inline-block mr-24">
          <img className="w-256" src="img/screen02.png" alt=""></img>
        </div>
        <div className="inline-block mr-24">
          <img className="w-256" src="img/screen02.png" alt=""></img>
        </div>
        <div className="inline-block mr-24">
          <img className="w-256" src="img/screen02.png" alt=""></img>
        </div>
        <div className="inline-block mr-24">
          <img className="w-256" src="img/screen02.png" alt=""></img>
        </div>
        <div className="inline-block mr-24 ">
          <img className="w-256" src="img/screen02.png" alt=""></img>
        </div>
      </div>
      <div className="hidden md:block md:pb-160 xl:pb-256">
        <SliderSection05 />
      </div>
    </section>
  );
};

export default Section07;
