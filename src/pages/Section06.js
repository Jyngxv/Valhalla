import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const Section06 = () => {
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
    <motion.section className="relative overflow-y-hidden" initial="offscreen" whileInView="onscreen">
      <div className="container relative z-20 px-24 pb-0 py-128 md:px-48 md:py-160 xl:px-0 xl:py-192">
        <div className="mb-64">
          <motion.div className="hidden md:block" variants={FadeUp} transition={{ duration: 1 }}>
            <p className="pl-16 text-3xl font-bold tracking-wide text-white font-Bebas md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="linear-wipe-7">8</span> petsonality
            </p>
          </motion.div>
          <div className="md:hidden">
            <p className="pl-16 font-bold text-center text-white text-8xl font-Bebas">
              <span className="linear-wipe-7">eight</span>
            </p>
            <p className="pl-16 text-4xl font-bold  text-center text-white font-Bebas mt-[-24px]">petsonality</p>
          </div>
          <motion.p
            className="pl-16 font-medium text-center text-white text-sm2 md:text-base md:text-left"
            variants={FadeUp}
            transition={{ duration: 1, delay: 0.5 }}
          >
            푸드 알고리즘이 내 반려동물의 8가지 정보를 바탕으로 34억 8천만 케이스를 분석합니다
          </motion.p>
        </div>
        <div className="flex flex-row flex-wrap z-[2]">
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 0.7 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-opacity-20 border-neutral-300 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 md:mb-0 w-96" src="img/p_img_e1.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">성별</p>
              <p className="text-base text-white opacity-70 font-regular">#남아 #여아</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 0.8 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e2.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">중성화</p>
              <p className="text-base text-white opacity-70 font-regular">#했어요 #안했어요</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 0.9 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e3.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">품종</p>
              <p className="text-base text-white opacity-70 font-regular">#234종 개체 분석</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e4.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">나이</p>
              <p className="text-base text-white opacity-70 font-regular">#3단계 생애주기 분석</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.1 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e5.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">체중</p>
              <p className="text-base text-white opacity-70 font-regular">#3단계 비만 분석</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.2 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e6.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">기호성</p>
              <p className="text-base text-white opacity-70 font-regular">#5가지 기호성</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.3 }}>
            <div className="p-24 border md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e7.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">알러지</p>
              <p className="text-base text-white opacity-70 font-regular">#8가지 기준</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 md:p-8 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.4 }}>
            <div className="p-24 border first-letter:first-line: md:p-36 xl:p-48 border-neutral-300 border-opacity-20 backdrop-blur-xl rounded-24 hover:backdrop-blur-sm">
              <img className="mb-16 w-96" src="img/p_img_e8.png" alt="" />
              <p className="mb-8 font-bold text-white text-md3 md:text-xl">고민</p>
              <p className="text-base text-white opacity-70 font-regular">#15가지 고민</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-screen h-full dimmed03 z-[-1]"></div>
      <video autoPlay className="hidden md:block nt-video h-full z-[-2] opacity-50" loop muted>
        <source src="video/p_video_algorithm.mp4"></source>
      </video>
      <div className="absolute top-0 left-0 w-screen h-full bg-black z-[-3]"></div>
      <div className="md:hidden absolute top-0 left-0 z-[-2] w-screen h-full bg-center bg-cover bg-no-repeat bg-petsonality"></div>
    </motion.section>
  );
};

export default Section06;
