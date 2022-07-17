import React from "react";
import { motion } from "framer-motion";

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
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-256">
        <div className="wrapper">
          <div className="flex flex-col">
            <div className="z-30 flex flex-row mb-48 md:mb-64 lg:mb-96 xl:mb-48">
              <motion.div
                className="bg-black xl:mb-128"
                initial="offscreen"
                whileInView="onscreen"
              >
                <motion.p
                  className="font-bold leading-relaxed text-white text-md2 md:text-xl xl:text-2xl"
                  variants={leftToRight}
                  transition={{ duration: 0.2 }}
                >
                  푸드는 꿈같은 기술로서
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
                  고민을 해결해줍니다.
                </motion.p>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="pl-8 mr-24 text-lg font-light text-white opacity-50">
                  We call it
                </p>
                <div className="w-auto h-2 bg-white"></div>
              </div>
              <div className="h-2 w-100% linear-wipe-3 opacity-50 mb-24"></div>
              <p className="tracking-wide text-white text-8xl md:text-7xl xl:text-11xl font-Bebas linear-wipe-0">
                Hyper
              </p>
              <p className="text-3xl text-white md:text-7xl xl:text-11xl font-Bebas linear-wipe-0 mt-[-24px] md:mt-0">
                Petsonalization
              </p>
              <p className="text-3xl text-white md:text-7xl xl:text-11xl font-Bebas linear-wipe-0 mt-[-8px] md:mt-0">
                Commerce
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
