import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Section09 = () => {
  // Famer Motion 정의
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1.1], [0.1, 2.0]);

  return (
    <section className="relative overflow-y-hidden xl:py-192">
      <div className="container px-24 pb-32 xl:pb-0 md:px-48 md:pt-128 xl:px-0">
        <div className="mb-32 xl:mb-64">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="손가락만 움직여도"
            c_headline2="수의사에게 궁금증 해결"
            c_body1="푸드에서는 수의사가 기다리고 있습니다. 상품추천부터 관리 방법까지 무엇이든 언제나 물어보세요."
          />
        </div>
      </div>
      <div className="w-screen">
        <img
          className="object-cover w-screen h-480 md:h-960"
          src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        ></img>
      </div>
    </section>
  );
};

export default Section09;
