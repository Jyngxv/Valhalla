import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import SliderSection05 from "../components/SliderSection05";
import "../App.css";

const Section07 = () => {
  return (
    <section className="bg-black">
      <div className="container px-24 pb-0 py-128 md:px-48 md:pt-160 xl:px-0 xl:pt-256">
        <div className="mb-64 md:mb-96 xl:mb-128">
          <TitleHeadline
            textcolor1="text-white"
            textcolor2="text-secondary"
            textcolor3="text-neutral-500"
            c_headline1="사료부터 용품까지"
            c_headline2="빈틈없는 맞춤 추천"
            c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
            c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
          />
        </div>
      </div>
      <div className="pl-24 overflow-x-auto pb-96 whitespace-nowrap md:hidden">
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
