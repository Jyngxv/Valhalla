import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';

const Section10 = () => {
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
      <div className="container px-24 pb-64 xl:pb-0 pt-128 md:px-48 md:pt-160 lg:px-64 xl:px-0 xl:py-192">
        <div className="xl:mb-96 xl:w-50%">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="걱정을 넘어"
            c_headline2="수의사의 상품 검수"
            c_body1="상품 전문가와 수의사가 2단계에 걸쳐 푸드의 4가지 원칙으로 상품 검증"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:pb-192">
        <div className="bg-center bg-cover h-320 md:h-640 lg:h-768 xl:h-auto basis-1/1 xl:basis-1/3 bg-vet"></div>
        <div className="md:basis-1/1 xl:basis-2/3">
          <div className="flex flex-wrap">
            <div className="w-100% px-24 md:px-48 pt-128 border-b md:border-r md:border-b xl:border-t xl:border-b xl:border-r border-neutral-400 md:pt-128 pb-48 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <motion.div className="flex flex-col" variants={FadeUp} transition={{ duration: 1, delay: 0.5 }}>
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 1</p>
                <p className="font-extrabold text-md3 md:text-2xl">50개 푸드 입점 기준</p>
              </motion.div>
            </div>
            <div className="w-100% px-24 md:px-48 border-b md:border-b xl:border-t xl:border-b xl:border-r border-neutral-400 pt-128 pb-48 md:pt-128 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <motion.div className="flex flex-col" variants={FadeUp} transition={{ duration: 1, delay: 0.7 }}>
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 2</p>
                <p className="font-extrabold text-md3 md:text-2xl">성분 면밀 검토 </p>
              </motion.div>
            </div>
            <div className="w-100% px-24 md:px-48 pt-128 border-b md:border-r md:border-b xl:border-b xl:border-r border-neutral-400 md:pt-128 pb-48 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <motion.div className="flex flex-col" variants={FadeUp} transition={{ duration: 1, delay: 0.9 }}>
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 3</p>
                <p className="font-extrabold text-md3 md:text-2xl">제조사 시설 검토</p>
              </motion.div>
            </div>
            <div className="w-100% px-24 md:px-48 pt-128 border-b md:border-b xl:border-b xl:border-r border-neutral-400 md:pt-128 pb-48 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <motion.div className="flex flex-col" variants={FadeUp} transition={{ duration: 1, delay: 1.1 }}>
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 4</p>
                <p className="font-extrabold text-md3 md:text-2xl">수의사 직접 검증</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section10;
