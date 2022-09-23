import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';

const Section09 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section className="relative overflow-y-hidden bg-white pt-128 xl:py-192" initial="offscreen" whileInView="onscreen">
      <div className="container flex flex-col px-24 md:flex-row lg:px-64 xl:pb-0 md:px-48 md:py-160 xl:px-0">
        <div className="mb-32 xl:mb-64 basis-full md:basis-1/2">
          <div className="mb-48">
            <TitleHeadline
              textcolor1="text-black"
              textcolor2="text-black"
              textcolor3="text-neutral-800"
              c_headline1="공간을 넘어"
              c_headline2="수의사가 내 옆에"
              c_body1="상품 추천부터 관리 방법까지 손가락만으로 수의사를 만나보세요"
            />
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">무엇을 먹여야 할지 모를 때</p>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 0.5 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">얼마나 먹여야 할지 모를 때</p>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 0.7 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">다이어트가 필요할 때</p>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 0.9 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">우리 아이 관리방법이 궁금할 때</p>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 1 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">고민이 가득할 때</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <img className="object-cover pt-24 mx-auto md:pt-0 w-480" src="img/atten.png" alt=""></img>
        </div>
      </div>
    </motion.section>
  );
};

export default Section09;
