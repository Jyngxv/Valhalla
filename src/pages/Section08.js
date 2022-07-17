import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import { motion } from "framer-motion";

const Section08 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
    },
  };

  return (
    <section>
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-256">
        <div className="mb-48 md:mb-96 xl:mb-128">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="건강관리도"
            c_headline2="완벽히 맞춤으로"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
          />
        </div>
        <div className="overflow-x-auto whitespace-nowrap md:hidden">
          <div className="inline-block mr-24">
            <img
              className="w-256"
              src="img/img_sec06_device_01.png"
              alt=""
            ></img>
          </div>
          <div className="inline-block">
            <img
              className="w-256"
              src="img/img_sec06_device_02.png"
              alt=""
            ></img>
          </div>
        </div>
        <motion.div
          className="relative flex-col hidden md:flex md:flex-row"
          initial="offscreen"
          whileInView="onscreen"
        >
          <motion.div
            className="px-24 basis-1/2"
            variants={FadeUp}
            transition={{ ease: "easeOut", dealy: 1, duration: 1 }}
          >
            <img
              className="mx-auto w-400"
              src="img/img_sec06_device_01.png"
              alt=""
            ></img>
          </motion.div>
          <motion.div
            className="px-24 pt-64 basis-1/2"
            variants={FadeUp}
            transition={{ ease: "easeOut", dealy: 3, duration: 2 }}
          >
            <img
              className="mx-auto w-400"
              src="img/img_sec06_device_02.png"
              alt=""
            ></img>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section08;
