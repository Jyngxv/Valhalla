import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Section09 = () => {
  // Famer Motion 정의
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1.1], [0.1, 2.0]);

  return (
    <section className="relative overflow-y-hidden">
      <div className="container px-24 pb-32 xl:pb-0 pt-320 md:px-48 md:py-128 xl:px-0 xl:py-192">
        <div className="mb-32 xl:mb-64 xl:w-50%">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="손가락만 움직여도"
            c_headline2="수의사에게 궁금증 해결"
            c_body1="그래도 모르겠다면, 언제나 수의사가 기다리고 있습니다. 상품추천부터 관리 방법까지. 푸드에서는 이 모든 것에 비용을 지불하지 않아도 됩니다."
          />
        </div>
      </div>
      <motion.div className="absolute top-0 left-0 h-full md:hidden z-[-1] object-cover">
        <video className="object-cover w-auto h-full" autoPlay loop playsInline muted>
          <source src="video/large_2x.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div className="hidden md:block md:h-640 md:mt-[-120px] xl:mt-128" style={{ scale }}>
        <video className="w-screen my-auto bg-fixed bg-center bg-cover py-512" autoPlay loop playsInline muted>
          <source src="video/large_2x.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default Section09;
