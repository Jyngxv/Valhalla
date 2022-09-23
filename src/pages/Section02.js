import React from 'react';
import { motion } from 'framer-motion';

const Section02 = () => {
  // Famer Motion 정의
  const leftToRight = {
    offscreen: {
      x: -60,
      opacity: 10,
    },
    onscreen: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative overflow-y-hidden bg-black">
      <div className="container px-24 pb-0 pt-128 md:px-48 lg:px-64 md:py-160 lg:py-256 xl:px-0 xl:py-360">
        <div className="z-30 flex mb-48 md:mb-64 lg:mb-96 xl:mb-0">
          <motion.div className="" initial="offscreen" whileInView="onscreen">
            <motion.p className="text-lg font-bold text-white lg:text-3xl md:text-4xl xl:text-4xl" variants={leftToRight} transition={{ duration: 0.2 }}>
              아주 오래전부터 그 누구도
            </motion.p>
            <motion.p className="text-lg font-bold text-white lg:text-3xl md:text-4xl xl:text-4xl" variants={leftToRight} transition={{ duration: 0.4 }}>
              선택에 대한 확신이 없었습니다<span className="linear-wipe-6"></span>
            </motion.p>
            <motion.p className="text-lg font-bold text-white lg:text-3xl md:text-4xl xl:text-4xl" variants={leftToRight} transition={{ duration: 0.6 }}>
              우리는 어렵고 힘들었던 시간을 건너며
            </motion.p>
            <motion.p className="mb-24 text-lg font-bold text-white lg:text-3xl md:text-4xl xl:text-4xl" variants={leftToRight} transition={{ duration: 0.8 }}>
              <span className="linear-wipe-7">미지의 세계에 배를 띄워보냈습니다</span>
            </motion.p>
            <motion.p className="font-medium text-neutral-400 text-md1 md:text-md1 xl:text-md1" variants={leftToRight} transition={{ duration: 1 }}>
              그리고 우리는 마침내 미지의 세계를 밝혀줄 기술을 만들어냈습니다
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
