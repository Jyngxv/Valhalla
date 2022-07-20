import React from 'react';
import { motion } from 'framer-motion';

const Section04 = () => {
  // Famer Motion 정의
  const leftToRight = {
    offscreen: {
      x: -60,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative bg-black">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-192">
        <div className="wrapper">
          <div className="flex flex-col">
            <div className="z-30 flex flex-row mb-48 md:mb-64 lg:mb-96 xl:mb-48">
              <motion.div className="bg-black xl:mb-128" initial="offscreen" whileInView="onscreen">
                <motion.p
                  className="font-bold leading-relaxed text-white text-md2 md:text-xl xl:text-2xl"
                  variants={leftToRight}
                  transition={{ duration: 0.2 }}
                >
                  꿈같은 기술이
                </motion.p>
                <motion.p
                  className="font-bold leading-relaxed text-white text-md2 md:text-xl md:text-6xl xl:text-2xl"
                  variants={leftToRight}
                  transition={{ duration: 0.4 }}
                >
                  내 반려동물에게 딱 맞게
                </motion.p>
                <motion.p
                  className="font-bold leading-relaxed text-white text-md2 md:text-xl md:text-6xl xl:text-2xl"
                  variants={leftToRight}
                  transition={{ duration: 0.6 }}
                >
                  고민을 해결
                </motion.p>
              </motion.div>
            </div>
            <motion.div className="flex flex-col" initial="offscreen" whileInView="onscreen">
              <div className="flex flex-row">
                <p className="pl-8 font-light text-white opacity-50 md:mb-16 text-md3 md:text-lg">We call it</p>
              </div>
              <motion.p
                className="tracking-wide text-white text-9xl md:text-7xl xl:text-11xl font-Bebas linear-wipe-0"
                variants={leftToRight}
                transition={{ duration: 0.5, delay: 0 }}
              >
                Hyper
              </motion.p>
              <motion.p
                className="text-4xl text-white md:text-7xl xl:text-11xl font-Bebas linear-wipe-0 mt-[-24px] md:mt-0"
                variants={leftToRight}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Petsonalization
              </motion.p>
              <motion.p
                className="text-4xl text-white md:text-7xl xl:text-11xl font-Bebas linear-wipe-0 mt-[-20px] md:mt-0"
                variants={leftToRight}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Commerce
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
