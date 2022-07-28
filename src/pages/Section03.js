<<<<<<< HEAD
import React, { Suspense } from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
=======
import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
>>>>>>> b0374c560da001c2b66796e6f7317229ebb268ed

const Section03 = () => {
  // const scaleMinToMax = {
  //   offscreen: {
  //     scale: 0,
  //     opacity: 0,
  //   },
  //   onscreen: {
  //     scale: 1,
  //     opacity: 1,
  //   },
  // };
  const Spline = React.lazy(() => import('@splinetool/react-spline'));
  return (
<<<<<<< HEAD
    <section className="relative bg-black">
      <div className="relative w-100% h-screen md:h-960">
        <div className="absolute z-50 top-50% left-50% w-full translate-x-[-50%] translate-y-[-50%]">
          <p className="text-3xl font-extrabold leading-snug text-center text-white md:text-6xl lg:text-7xl xl:text-8xl">언젠가 꿈꿔왔던</p>
          <p className="mb-24 text-3xl font-extrabold text-center text-white md:mb-0 md:mb-48 md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-secondary">기술</span>이 여기에
          </p>
          <div className="flex justify-center">
            <div>
              <ul>
                <li>
                  <img className="mr-32 opacity-50 md:mr-40 pacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-snu.png" alt="" />
                </li>
                <li>
                  <img className="mr-32 opacity-50 md:mr-40 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-aafco.png" alt="" />
                </li>
                <li>
                  <img className="mr-32 opacity-50 md:mr-40 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-fediaf.png" alt="" />
                </li>
                <li>
                  <img className="opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-nrc.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          {/* <p className="font-medium text-center text-white text-sm2 w-40% mx-auto leading-snug">
            푸드 알고리즘은 가장 과학적인 방법에 기반하고 있습니다. 수의학에 기본이 되는 NRC, AAFCO, FEDIAF등 국제 기관의 연구 자료와 논문을 토대로 설계하여
            서울대학교 수의과대학과 공동 연구를 진행하고 있습니다.
          </p> */}
        </div>
        <div className="absolute z-10 object-cover w-screen h-screen md:h-960">
          <video className="flex justify-start object-cover w-screen h-screen md:h-960" autoPlay loop playsInline muted>
            <source src="video/ex4.mp4" type="video/mp4" />
          </video>
          {/* <Suspense fallback={<div>최지인 로딩중</div>}>
            <Spline scene="https://prod.spline.design/ioxkKtRLpMnO4taC/scene.splinecode" />
          </Suspense> */}
=======
    <section className="relative bg-black z-[-1]">
      <div className="container relative px-24 overflow-y-hidden py-128 md:px-48 md:py-160 xl:px-0 xl:py-192">
        <div className="mb-64 pt-360">
          <div className="absolute z-50">
            <p className="font-bold leading-snug text-center text-white text-8xl">
              언젠가 꿈꿔왔던
            </p>
            <p className="mb-48 font-bold text-center text-white text-8xl">
              기술이 여기에
            </p>
            <p className="font-medium text-center text-white text-md2 px-192">
              푸드 알고리즘은 NRC, AAFCO, FEDIAF등 국제 기관의 연구 자료를
              토대로 설계하였습니다. 또한 서울대학교 수의과대학과 공동 연구를
              진행하고 있습니다. 가장 과학적이고 수의학적인 푸드 알고리즘을 통해
              내 반려동물에 맞는 상품을 매우 쉽게 발견할 수 있습니다.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="py-24">
              <ul>
                <li>
                  <img
                    className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                    src="img/logo-snu.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                    src="img/logo-aafco.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                    src="img/logo-fediaf.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                    src="img/logo-nrc.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute top-192 left-50% translate-x-[-50%] z-10">
          <motion.div
            className="mx-auto lg:ml-auto lg:mr-0 w-240 md:w-400 xl:w-640"
            initial="offscreen"
            whileInView="onscreen"
          >
            <Spline scene="https://prod.spline.design/CcTrADUWFgqEhA89/scene.splinecode" />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row md:mb-0 xl:mb-128 ">
          <div className="flex mb-64 md:mb-120 xl:mb-0 basis-1/2">
            <div className="flex flex-row my-auto">
              {/* <div className="xl:mb-24">
                <TitleHeadline
                  textalgin="text-center"
                  textcolor1="text-white"
                  textcolor2="text-secondary"
                  textcolor3="text-neutral-300"
                  c_headline1="언젠가 꿈꿔왔던"
                  c_headline2="기술이 여기에"
                  c_body1="푸드 알고리즘은 NRC, AAFCO, FEDIAF등 국제 기관의 연구 자료를 토대로 설계하였습니다. 또한 서울대학교 수의과대학과 공동 연구를 진행하고 있습니다. 가장 과학적이고 수의학적인 푸드 알고리즘을 통해 내 반려동물에 맞는 상품을 매우 쉽게 발견할 수 있습니다."
                />
              </div> */}
            </div>
          </div>
>>>>>>> b0374c560da001c2b66796e6f7317229ebb268ed
        </div>
        {/* <div className="">
          <div className="absolute z-50 max-w-1280">
            <p className="font-bold leading-snug text-white text-8xl">언젠가 꿈꿔왔던</p>
            <p className="mb-48 font-bold text-white text-8xl">
              <span className="text-secondary">기술</span>이 여기에
            </p>
            <p className="font-medium text-white text-sm2 w-30%">
              푸드 알고리즘은 가장 과학적인 방법에 기반하고 있습니다. 수의학에 기본이 되는 NRC, AAFCO, FEDIAF등 국제 기관의 연구 자료와 논문을 토대로 설계하여
              서울대학교 수의과대학과 공동 연구를 진행하고 있습니다.
            </p>
          </div>
          <div className="flex justify-center pt-400">
            <div className="py-24">
              <ul>
                <li>
                  <img className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-snu.png" alt="" />
                </li>
                <li>
                  <img className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-aafco.png" alt="" />
                </li>
                <li>
                  <img className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-fediaf.png" alt="" />
                </li>
                <li>
                  <img className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-nrc.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Section03;
