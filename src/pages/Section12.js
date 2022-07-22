import React, { useEffect, useRef } from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import HorizontalScroll from 'react-scroll-horizontal';
import Spline from '@splinetool/react-spline';

const Section12 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };
  const BgChange = {
    offscreen: {
      background: '#ffffff',
    },
    onscreen: {
      background: '#000000',
    },
  };

  return (
    <motion.section className="relative h-screen" initial="offscreen" whileInView="onscreen" variants={BgChange}>
      <div className="relative h-100%">
        <div className="flex flex-col h-100% items-center justify-center">
          <HorizontalScroll
            reverseScroll={true}
            style={{ width: `100%`, height: `560px` }}
            // config        = {{ stiffness: int, damping: int }}
            animValues={1}
          >
            <div className="flex bg-black h-560">
              <div className="pl-128 flex h-100% items-center justify-start">
                <div className="flex flex-row">
                  <p className="mr-24 text-base font-extrabold text-white font-Bebas">Scroll</p>
                  <div className="flex items-center justify-start">
                    <p className="h-2 bg-white w-128"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-black h-560 w-1280">
              <div className="absolute z-50 pl-128 top-50% translate-y-[-50%]">
                <p className="font-extrabold text-white text-7xl">결제금액의</p>
                <p className="mb-24 font-extrabold text-white text-7xl">
                  <span className="linear-wipe-4">2%</span> 적립
                </p>
                <p className="text-white font-regular text-md1">나도 모르게 무수히 쌓이는 펫 커머스 최대 적립금</p>
              </div>
              <motion.div className="absolute top-0 left-320 w-640 mx-auto h-100% z-60 bg-black" variants={FadeUp} transition={{ delay: 0.5, duration: 3 }}>
                <Spline scene="https://prod.spline.design/CcTrADUWFgqEhA89/scene.splinecode" />
              </motion.div>
            </div>
            <div className="relative bg-black h-560 w-640">
              <div className="absolute z-50 w-640 top-70% translate-y-[-50%] text-center">
                <p className="font-extrabold text-white font-Bebas text-8xl linear-wipe-5">WELCOME</p>
                <p className="mb-8 font-extrabold text-white text-8xl font-Bebas mt-[-32px]">COUPON PACK</p>
                <p className="text-white font-regular text-md1">나도 모르게 무수히 쌓이는 펫 커머스 최대 적립금</p>
              </div>
              <div className="absolute top-0 left-0 w-640 mx-auto h-100% z-60 bg-black">
                <Spline scene="https://prod.spline.design/Oj1v0NLohF7pAt6E/scene.splinecode" />
              </div>
            </div>
            <div className="relative text-center bg-black h-560 w-960">
              <div className="">
                <p className="text-white opacity-50 text-md2 font-regular">적립</p>
                <p className="text-2xl font-bold text-white">결제금액 2% 적립</p>
                {/* <p className="text-6xl font-bold text-white">2% 적립</p> */}
              </div>
              <motion.div className="absolute top-0 left-0 w-100% h-100% z-60" variants={FadeUp}>
                {/* <Spline scene="https://prod.spline.design/CcTrADUWFgqEhA89/scene.splinecode" /> */}
              </motion.div>
            </div>
            <div className="relative text-center bg-black h-560 w-960">
              <div className="">
                <p className="text-white opacity-50 text-md2 font-regular">적립</p>
                <p className="text-2xl font-bold text-white">결제금액 2% 적립</p>
                {/* <p className="text-6xl font-bold text-white">2% 적립</p> */}
              </div>
              <motion.div className="absolute top-0 left-0 w-100% h-100% z-60" variants={FadeUp}>
                <Spline scene="https://prod.spline.design/CcTrADUWFgqEhA89/scene.splinecode" />
              </motion.div>
            </div>
          </HorizontalScroll>
        </div>
      </div>
    </motion.section>
  );

  //     <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-0">
  //         <div className="mb-48 md:mb-96 xl:mb-64">
  //           <TitleHeadline
  //             textcolor1="text-black"
  //             textcolor2="text-black"
  //             textcolor3="text-neutral-500"
  //             c_headline1="지금까지"
  //             c_headline2="이런 혜택은 없었다"
  //             textalign="text-center"
  //           />
  //         </div>
  //         <motion.div className="flex flex-col" initial="offscreen" whileInView="onscreen">
  //           <motion.div className="flex flex-col mb-24 lg:flex-row">
  //             <motion.div
  //               className="p-32 mb-24 md:p-48 lg:mb-0 lg:mr-24 card01 lg:basis-1/3 rounded-16 xl:rounded-none"
  //               variants={FadeUp}
  //               transition={{ duration: 0.1 }}
  //             >
  //               <p className="mb-16 font-extrabold text-white text-md2 md:text-md3 ">구매금액 최대적립</p>
  //               <p className="mb-64 text-white font-regular opacity-70 text-md1 md:text-md1">나도 모르게 쌓이는 포인트를 경험해보세요.</p>
  //               <div className="text-center">
  //                 <span className="text-white text-8xl font-Oswald linear-wipe-3">2</span>
  //                 <span className="text-4xl font-bold text-white">%</span>
  //               </div>
  //             </motion.div>
  //             <motion.div
  //               className="relative px-32 pt-32 md:px-48 md:pt-48 lg:basis-2/3 card02 rounded-16 xl:rounded-none"
  //               variants={FadeUp}
  //               transition={{ duration: 0.2, delay: 0.2 }}
  //             >
  //               <p className="mb-16 font-bold text-white text-md2 md:text-md3">신규회원 웰컴 쿠폰팩</p>
  //               <p className="mb-64 text-white opacity-70 font-regular text-md1 md:text-md1">
  //                 신규회원이라면 누구나
  //                 <span className="opacity-100">56,000원 쿠폰팩</span>을 지급해드려요. 여기에 넉넉한 30일 유효기간까지. 총 7장의 쿠폰으로 여유롭게 쇼핑하세요.
  //               </p>
  //               <img className="mx-auto overflow-hidden w-480" src="img/couponpack.png" alt=""></img>
  //               <div className="absolute bottom-0 h-120 w-100% mx-[-32px] md:mx-[-48px] rounded-16 xl:rounded-none dimmedCard"></div>
  //             </motion.div>
  //           </motion.div>
  //           <motion.div className="flex flex-col lg:flex-row">
  //             <motion.div
  //               className="relative px-32 pt-32 mb-24 md:px-48 md:pt-48 lg:mb-0 lg:mr-24 card03 lg:basis-1/2 rounded-24 xl:rounded-none"
  //               variants={FadeUp}
  //               transition={{ duration: 0.2, delay: 0.3 }}
  //             >
  //               <p className="mb-16 font-extrabold text-white text-md2 md:text-md3">추가 쿠폰</p>
  //               <p className="mb-64 text-white opacity-70 font-regular text-md1 md:text-md1">내 반려동물을 등록하면 추가 쿠폰을 드려요.</p>
  //               <img className="mx-auto" src="img/petid.png" alt=""></img>
  //               <div className="absolute bottom-0  h-120 w-100% mx-[-32px] md:mx-[-48px] dimmedCard rounded-24 xl:rounded-none"></div>
  //             </motion.div>
  //             <motion.div className="p-32 md:p-48 card04 basis-1/2 rounded-16 xl:rounded-none" variants={FadeUp} transition={{ duration: 0.2, delay: 0.4 }}>
  //               <div className="flex flex-col h-100%">
  //                 <div>
  //                   <p className="mb-16 font-extrabold text-white text-md2 md:text-md3">무료배송</p>
  //                   <p className="text-white opacity-70 font-regular text-md1 md:text-md1">배송비 걱정없이 단 한개의 상품도 무료배송으로 받아보세요.</p>
  //                 </div>
  //                 <div className="mx-16 my-64 lg:my-auto">
  //                   <div className="bg-[#343434] border-4 shadow-xl border-white h-96 md:h-128 rounded-16 md:rounded-24">
  //                     <div className="flex flex-row px-24 md:px-36">
  //                       <p className="pt-24 font-bold text-md3 md:text-xl md:pt-36 basis-1/2 text-neutral-200">배송비</p>
  //                       <span className="pt-24 font-bold text-right text-white text-md3 md:text-xl md:pt-36 basis-1/2">
  //                         <CountUp start={200} end={0} duration={2} separator="," enableScrollSpy></CountUp>원
  //                       </span>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           </motion.div>
  //         </motion.div>
  // </div>
};

export default Section12;
