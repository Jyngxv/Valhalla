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
    <motion.section className="relative py-64 overflow-y-hidden bg-white xl:py-128" initial="offscreen" whileInView="onscreen">
      <div className="container flex flex-col px-24 md:flex-row lg:px-64 xl:py-64 md:px-48 md:py-160 xl:px-0">
        <div className="mb-32 xl:mb-64 basis-full md:basis-1/2">
          <div className="mb-48">
            <TitleHeadline
              textcolor1="text-black"
              textcolor2="text-black"
              textcolor3="text-neutral-800"
              c_headline1="Anytime you"
              c_headline2="want to talk to a vet"
              c_body1="Start typing to meet our vet"
            />
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">What to feed</p>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 0.5 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">How much to feed</p>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 0.7 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">Need to diet</p>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 0.9 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">How to care</p>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div className="flex flex-row" variants={FadeUp} transition={{ duration: 1, delay: 1 }}>
              <div className="w-32 mr-8">
                <img src="img/p_icon_check.png" alt=""></img>
              </div>
              <div className="mt-[1px]">
                <p className="font-bold cursor-pointer text-neutral-800 text-md1 hover:text-primary">Something wrong</p>
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
