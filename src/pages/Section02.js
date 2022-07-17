import React from "react";
import { motion } from "framer-motion";

const Section01 = () => {
  // Famer Motion 정의
  const leftToRight = {
    offscreen: {
      x: -60,
      opacity: 10,
    },
    onscreen: {
      x: 0,
      opacity: 100,
    },
  };
  const lineLeftToRight = {
    offscreen2: {
      x: -900,
      opacity: 10,
    },
    onscreen2: {
      x: 150,
      opacity: 100,
    },
  };

  return (
    <section className="relative bg-black">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-256">
        <div className="wrapper">
          <div className="flex flex-col">
            <div className="z-30 flex flex-row mb-48 md:mb-64 lg:mb-96 xl:mb-0">
              <motion.div
                className="bg-black xl:mb-128"
                initial="offscreen"
                whileInView="onscreen"
              >
                <motion.p
                  className="text-3xl font-bold text-white md:text-6xl xl:text-7xl"
                  variants={leftToRight}
                  transition={{ duration: 0.2 }}
                >
                  어렵고
                </motion.p>
                <motion.p
                  className="text-3xl font-bold text-white md:text-6xl xl:text-7xl"
                  variants={leftToRight}
                  transition={{ duration: 0.4 }}
                >
                  힘들었던
                </motion.p>
                <motion.p
                  className="text-3xl font-bold text-white md:text-6xl xl:text-7xl linear-wipe-1"
                  variants={leftToRight}
                  transition={{ duration: 0.6 }}
                >
                  시간을 넘어서.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="pr-0 mb-24 md:pr-32 lg:pr-48 xl:pr-64 basis-1/3 md:mb-0">
              <p className="text-xl text-white md:text-2xl lg:text-3xl xl:text-4xl">
                07
              </p>
              <p className="mb-12 text-white text-md2 md:text-md1 lg:text-md2 xl:text-md3">
                상품을 해메는 시간
              </p>
              <p className="text-neutral-600 xl:text-base">
                Stela's Artist participate the subscription licensing policy for
                opportunity to give 220 Countries Creator
              </p>
            </div>
            <div className="mb-24 md:pr-32 lg:pr-48 xl:pr-64 basis-1/3 md:mb-0">
              <p className="text-xl text-white md:text-2xl lg:text-3xl xl:text-4xl">
                5,152
              </p>
              <p className="mb-12 text-white text-md2 md:text-md1 lg:text-md2 xl:text-md3">
                실패하는 비용
              </p>
              <p className="text-neutral-600 xl:text-base">
                Stela's Artist participate the subscription licensing policy for
                opportunity to give 220 Countries Creator
              </p>
            </div>
            <div className="basis-1/3">
              <p className="text-xl text-white md:text-2xl lg:text-3xl xl:text-4xl">
                999+
              </p>
              <p className="mb-12 text-white text-md2 md:text-md1 lg:text-md2 xl:text-md3">
                Outstanding Stars
              </p>
              <p className="text-neutral-600 xl:text-base">
                Stela's Artist participate the subscription licensing policy for
                opportunity to give 220 Countries Creator
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute h-8 bg-white md:w-50% lg:w-65% xl:w-60% right-0 md:top-[150px] lg:top-[390px] xl:top-[538px]"
        variants={lineLeftToRight}
        initial="offscreen2"
        whileInView="onscreen2"
        transition={{ duration: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default Section01;
