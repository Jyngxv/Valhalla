import React, { useState, useEffect } from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import HorizontalScroll from 'react-scroll-horizontal';
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
  const cards = [...new Array(10)].map((x, i) => ({
    name: `card ${i}`,
    img: 'https://source.unsplash.com/random',
  }));

  return (
    <section className=" xl:py-256">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-0">
        <div className="mb-48 md:mb-96 xl:mb-64">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-500"
            c_headline1="지금까지"
            c_headline2="이런 혜택은 없었다"
            textalign="text-center"
          />
        </div>

        {/* <motion.div className="flex flex-col" initial="offscreen" whileInView="onscreen">
          <motion.div className="flex flex-col mb-24 lg:flex-row">
            <motion.div
              className="p-32 mb-24 md:p-48 lg:mb-0 lg:mr-24 card01 lg:basis-1/3 rounded-16 xl:rounded-none"
              variants={FadeUp}
              transition={{ duration: 0.1 }}
            >
              <p className="mb-16 font-extrabold text-white text-md2 md:text-md3 ">구매금액 최대적립</p>
              <p className="mb-64 text-white font-regular opacity-70 text-md1 md:text-md1">나도 모르게 쌓이는 포인트를 경험해보세요.</p>
              <div className="text-center">
                <span className="text-white text-8xl font-Oswald linear-wipe-3">2</span>
                <span className="text-4xl font-bold text-white">%</span>
              </div>
            </motion.div>
            <motion.div
              className="relative px-32 pt-32 md:px-48 md:pt-48 lg:basis-2/3 card02 rounded-16 xl:rounded-none"
              variants={FadeUp}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <p className="mb-16 font-bold text-white text-md2 md:text-md3">신규회원 웰컴 쿠폰팩</p>
              <p className="mb-64 text-white opacity-70 font-regular text-md1 md:text-md1">
                신규회원이라면 누구나
                <span className="opacity-100">56,000원 쿠폰팩</span>을 지급해드려요. 여기에 넉넉한 30일 유효기간까지. 총 7장의 쿠폰으로 여유롭게 쇼핑하세요.
              </p>
              <img className="mx-auto overflow-hidden w-480" src="img/couponpack.png" alt=""></img>
              <div className="absolute bottom-0 h-120 w-100% mx-[-32px] md:mx-[-48px] rounded-16 xl:rounded-none dimmedCard"></div>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col lg:flex-row">
            <motion.div
              className="relative px-32 pt-32 mb-24 md:px-48 md:pt-48 lg:mb-0 lg:mr-24 card03 lg:basis-1/2 rounded-24 xl:rounded-none"
              variants={FadeUp}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <p className="mb-16 font-extrabold text-white text-md2 md:text-md3">추가 쿠폰</p>
              <p className="mb-64 text-white opacity-70 font-regular text-md1 md:text-md1">내 반려동물을 등록하면 추가 쿠폰을 드려요.</p>
              <img className="mx-auto" src="img/petid.png" alt=""></img>
              <div className="absolute bottom-0  h-120 w-100% mx-[-32px] md:mx-[-48px] dimmedCard rounded-24 xl:rounded-none"></div>
            </motion.div>
            <motion.div className="p-32 md:p-48 card04 basis-1/2 rounded-16 xl:rounded-none" variants={FadeUp} transition={{ duration: 0.2, delay: 0.4 }}>
              <div className="flex flex-col h-100%">
                <div>
                  <p className="mb-16 font-extrabold text-white text-md2 md:text-md3">무료배송</p>
                  <p className="text-white opacity-70 font-regular text-md1 md:text-md1">배송비 걱정없이 단 한개의 상품도 무료배송으로 받아보세요.</p>
                </div>
                <div className="mx-16 my-64 lg:my-auto">
                  <div className="bg-[#343434] border-4 shadow-xl border-white h-96 md:h-128 rounded-16 md:rounded-24">
                    <div className="flex flex-row px-24 md:px-36">
                      <p className="pt-24 font-bold text-md3 md:text-xl md:pt-36 basis-1/2 text-neutral-200">배송비</p>
                      <span className="pt-24 font-bold text-right text-white text-md3 md:text-xl md:pt-36 basis-1/2">
                        <CountUp start={200} end={0} duration={2} separator="," enableScrollSpy></CountUp>원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div> */}
      </div>

      <HorizontalScroll
        pageLock={false}
        reverseScroll={true}
        style={{ width: `100%`, height: `600px` }}
        //config        = {{ stiffness: int, damping: int }}
        //className     = { string }
        //animValues    = { int }
      >
        {cards.map((card) => (
          <div className="w-400">
            <img src={card.img} alt="" />
            <p>{card.name}</p>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
};

export default Section12;
