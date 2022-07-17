import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Section07 = () => {
  // Famer Motion 정의
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.1, 2.1]);

  return (
    <section className="relative overflow-y-hidden">
      <div className="container px-24 xl:pb-0 py-128 md:px-48 md:py-128 xl:px-0 xl:py-128">
        <div className="mb-32 xl:mb-64">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="이렇게 쉽게"
            c_headline2="수의사를 만날줄이야"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
          />
        </div>
      </div>
      <motion.div className="absolute top-0 left-0 h-full md:hidden z-[-1] object-cover">
        <video
          className="object-cover w-auto h-full"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src="video/large_2x.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        className="hidden md:block md:h-640 md:mt-[-120px] xl:mt-0"
        style={{ scale }}
      >
        <video
          className="w-screen my-auto bg-fixed bg-center bg-cover py-512"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src="video/large_2x.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default Section07;
