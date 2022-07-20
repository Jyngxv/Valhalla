import React, { useEffect } from 'react';
import SliderSection04 from '../components/SliderSection04';
import { motion } from 'framer-motion';

const Section05 = () => {
  // Famer Motion 정의
  const lineUpToBottom = {
    offscreen: {
      height: 0,
      opacity: 0,
    },
    onscreen: {
      height: 1200,
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
    <section className="relative overflow-hidden bg-black">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-192">
        <div className="flex flex-col overflow-hidden">
          <div className="relative">
            <motion.div className="w-300 xl:w-[400px] mx-auto mb-48 xl:mb-0" variants={Fade} transition={{ delay: 1 }}>
              <div className="absolute left-0 right-0 z-20 mx-auto w-300 xl:w-[400px]">
                <img src="../img/p_device_blank.png" alt="" />
              </div>
              <div className="z-10" initial="offscreen" whileInView="onscreen">
                <SliderSection04 />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute w-8 top-0 left-50% bg-secondary z-60 overflow-auto"
        variants={lineUpToBottom}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default Section05;
