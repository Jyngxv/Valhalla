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
    <section className="relative overflow-y-hidden bg-white">
      <div className="container px-24 py-64 md:px-48 lg:px-64 md:py-128 lg:py-160 xl:px-0 xl:py-196">
        <div className="z-30 flex ">
          <motion.div className="" initial="offscreen" whileInView="onscreen">
            <motion.p
              className="font-bold text-black text-md3 lg:text-3xl md:text-2xl xl:text-4xl font-Jakarta"
              variants={leftToRight}
              transition={{ duration: 0.2 }}
            >
              {/* 아주 오래전부터 그 누구도 */}People were still choosing pet food
            </motion.p>
            <motion.p
              className="font-bold text-black text-md3 lg:text-3xl md:text-2xl xl:text-4xl font-Jakarta"
              variants={leftToRight}
              transition={{ duration: 0.4 }}
            >
              by recommendation from around them.
              {/* 선택에 대한 확신이 없었습니다<span className="linear-wipe-6"></span> */}
            </motion.p>
            <motion.p
              className="font-bold text-black text-md3 lg:text-3xl md:text-2xl xl:text-4xl font-Jakarta"
              variants={leftToRight}
              transition={{ duration: 0.6 }}
            >
              For a pet life easier ever.
              {/* 우리는 어렵고 힘들었던 시간을 건너며 */}
            </motion.p>
            <motion.p
              className="mb-24 font-bold text-black text-md3 lg:text-3xl md:text-2xl xl:text-4xl font-Jakarta"
              variants={leftToRight}
              transition={{ duration: 0.8 }}
            >
              <span className="linear-wipe-7">We wanted to innovate these old system.</span>
            </motion.p>
            <motion.p
              className="text-sm3 font-regular text-neutral-800 md:text-md1 xl:text-md1 font-Jakarta"
              variants={leftToRight}
              transition={{ duration: 1 }}
            >
              Finally, We've created the technology which is light up to the unknown world.
              {/* 그리고 우리는 마침내 미지의 세계를 밝혀줄 기술을 만들어냈습니다 */}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
