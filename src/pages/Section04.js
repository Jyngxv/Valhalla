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
    <section className="relative hidden overflow-y-hidden bg-black md:block">
      <div className="container px-24 md:px-48 md:py-160 lg:px-64 xl:px-0 xl:pt-192 xl:pb-0">
        <div className="wrapper">
          <div className="flex flex-col">
            <motion.div className="flex flex-col" initial="offscreen" whileInView="onscreen">
              <motion.p
                className="text-3xl text-white md:text-8xl lg:text-9xl xl:text-11xl font-Bebas linear-wipe-0 lg:mt-[-20px] xl:mt-[-24px] md:mt-0 text-left"
                variants={leftToRight}
                transition={{ duration: 0.5, delay: 0 }}
              >
                Hyper
              </motion.p>
              <motion.p
                className="text-3xl text-white md:text-8xl lg:text-9xl xl:text-11xl font-Bebas linear-wipe-0 lg:mt-[-20px] xl:mt-[-24px] mt-[-20px] md:mt-[-24px] text-left"
                variants={leftToRight}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Petsonalized
              </motion.p>
              <motion.p
                className="text-3xl text-white md:text-8xl lg:text-9xl xl:text-11xl font-Bebas linear-wipe-0 lg:mt-[-20px] xl:mt-[-24px] mt-[-20px] md:mt-[-24px] text-left"
                variants={leftToRight}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Technology
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
