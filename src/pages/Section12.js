import React from 'react';
import { motion } from 'framer-motion';


const Section12 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative bg-white">
      <div className="container relative px-24 md:py-0 md:px-48 lg:px-64 xl:px-0 xl:py-0">
        <div className="flex flex-col">
          <div className="flex flex-col mb-16 md:mb-32 xl:flex-row">
            <div className="mb-16 xl:mb-0 md:mb-32 xl:mr-32 p-36 bg-neutral-200 basis-1/3 rounded-8 md:rounded-24 hover:bg-neutral-300">
              <div className="flex-col md:mb-36">
                <p className="text-base text-black opacity-70">결제금액의</p>
                <p className="text-xl font-bold text-black md:text-2xl">
                  <span className="font-extrabold linear-wipe-4">2%</span> 적립
                </p>
              </div>
              <div className="justify-center hidden md:flex"></div>
            </div>
            <div className="p-36 bg-neutral-200 hover:bg-neutral-300 basis-2/3 md:rounded-24 rounded-8">
              <div className="flex-col md:mb-36">
                <p className="text-base text-black opacity-70">신규고객에게는</p>
                <p className="text-xl font-bold text-black md:text-2xl">
                  <span className="font-extrabold linear-wipe-5">56,000</span> 쿠폰팩
                </p>
              </div>
              <div className="hidden md:flex md:justify-center xl:justify-end"></div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="mb-16 xl:mr-32 p-36 bg-neutral-200 basis-2/3 md:rounded-24 hover:bg-neutral-300 xl:mb-0 md:mb-32 rounded-8">
              <div className="md:mb-36">
                <p className="text-base text-black opacity-70">최초 펫 등록시</p>
                <p className="text-xl font-bold text-black md:text-2xl">
                  <span className="font-extrabold linear-wipe-8">쿠폰</span> 하나 더
                </p>
              </div>
              <div className="hidden md:flex md:justify-center xl:justify-end"></div>
            </div>
            <div className="p-36 bg-neutral-200 basis-1/3 md:rounded-24 hover:bg-neutral-300 rounded-8">
              <div className="md:mb-36">
                <p className="text-base text-black opacity-70">하나의 상품도</p>
                <p className="text-xl font-bold text-black md:text-2xl">
                  <span className="font-extrabold linear-wipe-6">무료</span> 배송
                </p>
              </div>
              <div className="justify-center hidden md:flex"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
