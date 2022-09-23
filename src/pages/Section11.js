import React from 'react';
import { motion } from 'framer-motion';

const Section11 = () => {
  const leftToRight = {
    offscreen: {
      x: -80,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section className="relative" initial="offscreen" whileInView="onscreen">
      <div className="relative overflow-y-hidden">
        <div className="container relative px-24 py-64 pb-64 md:px-48 lg:px-64 xl:px-0 md:py-256 xl:py-256">
          <motion.p
            className="text-3xl font-bold md:mb-24 linear-wipe-7 md:text-5xl lg:text-7xl xl:text-10xl font-Jakarta xl:mt-[-96px]"
            variants={leftToRight}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            One app
          </motion.p>
          <motion.p
            className="text-3xl font-bold md:mb-24 linear-wipe-7 md:text-5xl lg:text-7xl xl:text-10xl font-Jakarta md:mt-[-32px] xl:mt-[-96px]"
            variants={leftToRight}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            from solution
          </motion.p>
          <motion.p
            className="mb-48 text-3xl font-bold md:mb-24 linear-wipe-7 md:text-5xl lg:text-7xl xl:text-10xl font-Jakarta md:mt-[-32px] xl:mt-[-96px]"
            variants={leftToRight}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            to healthcare
          </motion.p>
          <div className="flex md:absolute md:right-48 lg:right-64 xl:right-0 md:top-50% md:translate-y-[-50%] md:w-[480px] lg:w-[560px] xl:w-[640px] overflow-y-hidden justify-end">
            <img src="img/p_device_commerce.png" className="md:w-80%" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="container px-24 pb-0 pt-128 md:px-48 md:pt-128 xl:px-0 xl:pt-192 xl:pb-64 md:pb-48">
        <div className="">
          <TitleHeadline
            textalign="text-center"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="할인을 넘어"
            c_headline2="즐거움까지 @@@"
          />
        </div>
      </div>
      <div className="flex flex-row text-center md:pl-0 w-100% md:pb-160 xl:pb-192 pb-128">
        <TabSection08 />
      </div> */}
    </motion.section>
  );
};

export default Section11;
