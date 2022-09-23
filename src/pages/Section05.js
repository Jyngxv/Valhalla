import React, { useEffect } from 'react';
import SliderSection04 from '../components/SliderSection04';
import { motion } from 'framer-motion';

const Section05 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 80,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };
  const Fade = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  };
  return (
    <motion.section className="relative hidden overflow-hidden bg-black md:block" initial="offscreen" whileInView="onscreen">
      <div className="container hidden px-24 md:block py-128 md:px-48 md:py-0 xl:px-0 xl:pt-96 xl:pb-192">
        <div className="flex flex-col overflow-hidden">
          <div className="relative">
            <motion.div className="w-[370px] h-[820px] mx-auto">
              <div className="absolute left-0 right-0 z-40 mx-auto w-[398px]">
                <img src="../img/p_device_blank.png" alt="" />
              </div>
              <div className="relative z-[2] overflow-y-auto" initial="offscreen" whileInView="onscreen">
                <SliderSection04 />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute md:w-100% top-50% left-50% translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-center">
          <img className="w-640" src="img/logo.png" alt="" />
        </div>
      </div>
    </motion.section>
  );
};

export default Section05;
