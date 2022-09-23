import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import SliderSection05 from '../components/SliderSection05';
import '../App.css';
import { motion } from 'framer-motion';
const Section07 = () => {
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
    <section className="bg-white">
      <div className="container px-24 py-64 pb-0 md:px-48 md:pt-160 lg:px-64 xl:px-0 xl:pt-256">
        <div className="mb-64 md:mb-96 xl:mb-64 xl:w-100%">
          <TitleHeadline
            textalign="text-center"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="Stop looking for"
            c_headline2="the right product"
            c_body1="From feed to supplies, we can advice the best products for your pet"
            // c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
          />
        </div>
      </div>
      <motion.div className="pb-64 pl-24 overflow-x-auto whitespace-nowrap md:hidden" initial="offscreen" whileInView="onscreen">
        <motion.div className="inline-block mr-32" variants={FadeUp} transition={{ delay: 0, durtaion: 0.5 }}>
          <img className="p-4 shadow-xl w-256 rounded-20" src="img/p_screen_store_1.png" alt=""></img>
        </motion.div>
        <motion.div className="inline-block mr-32" variants={FadeUp} transition={{ delay: 0.3, durtaion: 0.5 }}>
          <img className="px-4 shadow-xl w-256 rounded-20" src="img/p_screen_store_2.png" alt=""></img>
        </motion.div>
        <motion.div className="inline-block mr-32" variants={FadeUp} transition={{ delay: 0.5, durtaion: 0.5 }}>
          <img className="p-4 shadow-xl w-256 rounded-20" src="img/p_screen_store_3.png" alt=""></img>
        </motion.div>
        <motion.div className="inline-block mr-32" variants={FadeUp} transition={{ delay: 0.7, durtaion: 0.5 }}>
          <img className="p-4 shadow-xl w-256 rounded-20" src="img/p_screen_store_4.png" alt=""></img>
        </motion.div>
        <motion.div className="inline-block mr-24" variants={FadeUp} transition={{ delay: 0.9, durtaion: 0.5 }}>
          <img className="p-4 shadow-xl w-256 rounded-20" src="img/p_screen_store_5.png" alt=""></img>
        </motion.div>
      </motion.div>
      <motion.div className="hidden md:block md:pb-160 xl:pb-128" variants={FadeUp} transition={{ delay: 0.5, durtaion: 0.5 }}>
        <SliderSection05 />
      </motion.div>
    </section>
  );
};

export default Section07;
