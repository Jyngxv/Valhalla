import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';
import '../App.css';

const Section08 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
    },
  };

  return (
    <motion.section className="relative" initial="offscreen" whileInView="onscreen" transition={{ duration: 1 }}>
      <div className="container px-24 py-64 md:px-48 md:py-160 lg:px-64 xl:px-0 xl:pt-128 xl:pb-128">
        <div className="md:mb-96 xl:mb-96">
          <TitleHeadline
            textalign="text-center"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="Stop looking for"
            c_headline2="ways to care"
            c_body1="#Lifetime #Sleep #Tooth #Vaccine #Nutrition"
          />
        </div>
        <motion.div className="relative flex-col hidden md:flex md:flex-row" initial="offscreen" whileInView="onscreen">
          <motion.div className="px-24 basis-1/2" variants={FadeUp} transition={{ ease: 'easeOut', dealy: 1, duration: 1 }}>
            <img className="mx-auto w-400" src="img/p_device_health_1.png" alt=""></img>
          </motion.div>
          <motion.div className="px-24 pt-64 basis-1/2" variants={FadeUp} transition={{ ease: 'easeOut', dealy: 3, duration: 2 }}>
            <img className="mx-auto w-400" src="img/p_device_health_2.png" alt=""></img>
          </motion.div>
        </motion.div>
      </div>
      <div className="px-24 pb-64 overflow-x-auto whitespace-nowrap md:hidden">
        <div className="inline-block mr-24">
          <img className="w-256" src="img/p_device_health_1.png" alt=""></img>
        </div>
        <div className="inline-block">
          <img className="w-256" src="img/p_device_health_2.png" alt=""></img>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-full z-[-1]">
        <img className="absolute top-60% left-50% translate-x-[-50%] translate-y-[-55%] w-640" src="img/p_img_sharp.png" alt="" />
      </div>
    </motion.section>
  );
};

export default Section08;
