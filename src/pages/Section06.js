import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import '../App.css';
import { motion } from 'framer-motion';

const Section06 = () => {
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
    <section className="bg-black">
      <div className="container px-24 pb-0 py-128 md:px-48 md:pt-160 xl:px-0 xl:pt-192">
        <div className="mb-64 md:mb-96 xl:mb-128">
          <TitleHeadline
            textalign="text-center"
            textcolor1="text-white"
            textcolor2="text-white"
            textcolor3="text-neutral-500"
            c_headline1="단 한번의 등록"
            c_headline2="위대한 첫 걸음"
          />
        </div>
      </div>
      <motion.div className="flex flex-row flex-wrap pb-128 md:pb-160 xl:pb-192" initial="offscreen" whileInView="onscreen">
        <motion.div
          className="h-auto w-100% md:w-50% xl:w-25% bg-bg01 basis-1/1 md:basis-1/2 xl:basis-1/4 relative"
          variants={FadeUp}
          transition={{ ease: 'easeOut', dealy: 0, duration: 1 }}
        >
          <div className="absolute z-50 flex flex-col left-10% bottom-20% md:left-10% md:bottom-10% xl:left-15% xl:bottom-15%">
            <p className="mb-8 font-bold text-white text-md2">5분만에 등록완료</p>
            <p className="font-medium text-white text-tiny opacity-70">타이핑 없이 터치로만 입력하세요.</p>
          </div>
          <video className="relative top-0 z-10 object-cover h-640 md:absolute md:h-full" autoPlay loop playsInline muted>
            <source src="video/ex.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="h-auto w-100% md:w-50% xl:w-25% bg-bg01 basis-1/1 md:basis-1/2 xl:basis-1/4 relative"
          variants={FadeUp}
          transition={{ ease: 'easeOut', dealy: 2, duration: 1 }}
        >
          <div className="absolute z-50 flex flex-col left-10% bottom-20% md:left-10% md:bottom-10% xl:left-15% xl:bottom-15%">
            <p className="mb-8 font-bold text-white text-md2">알러지 선택</p>
            <p className="font-medium text-white text-tiny opacity-70">타이핑 없이 터치로만 입력하세요.</p>
          </div>
          <img src="img/device02.png" alt=""></img>
        </motion.div>
        <motion.div
          className="h-auto md:w-50% xl:w-25% basis-1/1 md:basis-1/2 xl:basis-1/4 relative"
          variants={FadeUp}
          transition={{ ease: 'easeOut', dealy: 4, duration: 1 }}
        >
          <div className="absolute z-50 flex flex-col left-10% bottom-20% md:left-10% md:bottom-10% xl:left-15% xl:bottom-15%">
            <p className="mb-8 font-bold text-white text-md2">기호성 선택</p>
            <p className="font-medium text-white text-tiny opacity-70">타이핑 없이 터치로만 입력하세요.</p>
          </div>
          <img src="img/device04.png" alt=""></img>
        </motion.div>
        <motion.div
          className="h-auto md:w-50% xl:w-25% basis-1/1 md:basis-1/2 xl:basis-1/4 relative"
          variants={FadeUp}
          transition={{ ease: 'easeOut', dealy: 6, duration: 1 }}
        >
          <div className="absolute z-50 flex flex-col left-10% bottom-20% md:left-10% md:bottom-10% xl:left-15% xl:bottom-15%">
            <p className="mb-8 font-bold text-white text-md2">15가지 고민</p>
            <p className="font-medium text-white text-tiny opacity-70">타이핑 없이 터치로만 입력하세요.</p>
          </div>
          <img className="z-10" src="img/device03.png" alt=""></img>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section06;
