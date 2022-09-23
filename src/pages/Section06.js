import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import TitleHeadline from '../components/TitleHeadline';
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
    <motion.section className="relative overflow-y-hidden bg-white" initial="offscreen" whileInView="onscreen">
      <div className="container relative z-20 px-24 py-64 md:px-48 md:py-160 xl:px-0 xl:pt-192 xl:pb-256">
        <div className="mb-64">
          <TitleHeadline
            textalign="text-left"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="8 Petsonality"
            c_headline2="Countless cases"
            c_body1="Our algorithm analayze 3.4 billion case based on 8 pet information."
          />
        </div>
        <div className="flex flex-row flex-wrap z-[2]">
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 0.7 }}>
            <div className="p-24 md:p-36 xl:p-48 backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e1.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Gender</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">2 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 0.8 }}>
            <div className="p-24  md:p-36 xl:p-48   backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e2.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Neuter</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">2 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 0.9 }}>
            <div className="p-24  md:p-36 xl:p-48 backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e3.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Breeds</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">234 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1 }}>
            <div className="p-24  md:p-36 xl:p-48  backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e4.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Lifecycle</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">3 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.1 }}>
            <div className="p-24  md:p-36 xl:p-48 backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e5.png" alt="" />
              <p className="mb-8 font-bold text-[#222]text-md3 md:text-xl">Weight</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">3 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.2 }}>
            <div className="p-24  md:p-36 xl:p-48 backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e6.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Flavor</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">5 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.3 }}>
            <div className="p-24  md:p-36 xl:p-48 backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e7.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Allergy</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">8 cases</p>
            </div>
          </motion.div>
          <motion.div className="mb-16 md:mb-0 basis-full md:basis-1/2 xl:basis-1/4" variants={FadeUp} transition={{ duration: 1, delay: 1.4 }}>
            <div className="p-24  md:p-36 xl:p-48 backdrop-blur-xl rounded-0 hover:bg-[#f7f7f7]">
              <img className="mb-16 w-96" src="img/p_img_e8.png" alt="" />
              <p className="mb-8 font-bold text-[#222] text-md3 md:text-xl">Anxiety</p>
              <p className="text-base text-neutral-800 opacity-70 font-regular">455 cases</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section06;
