import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import { motion } from 'framer-motion';

const Section03 = () => {
  const scaleMinToMax = {
    offscreen: {
      scale: 0,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section id="algorithm" className="bg-black">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-192">
        <div className="flex flex-col lg:flex-row md:mb-0 xl:mb-128 ">
          <div className="flex mb-64 md:mb-120 xl:mb-0 basis-1/2">
            <div className="flex flex-col my-auto">
              <div className="xl:mb-24">
                <TitleHeadline
                  textcolor1="text-white"
                  textcolor2="text-secondary"
                  textcolor3="text-neutral-500"
                  c_headline1="언젠가 꿈꿔왔던"
                  c_headline2="기술이 여기에"
                  c_body1="세계 최초의 반려동물 정보를 다각도로 분석하는 푸드 알고리즘은 수의학에 기반하여 개발되었습니다. NRC, AAFCO, FEDIAF등 국제 기관의 연구 자료를 기반으로 설계되었으며, 서울대학교 수의과대학과 공동 연구를 진행하고 있습니다. 반려동물의 생애주기부터 체중, 알러지 현황, 기호성 그리고 보호자의 고민까지 8가지의 정보를 바탕으로 내 반려동물의 상태를 AI기술이 정확히 파악해냅니다. "
                />
              </div>
              <div className="md:block xl:block">
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
            </div>
          </div>
          <div className="lg:basis-1/2">
            <motion.div className="mx-auto lg:ml-auto lg:mr-0 w-240 md:w-400 xl:w-480" initial="offscreen" whileInView="onscreen">
              <motion.video autoPlay loop playsInline muted whileHover={{ scale: 1.1 }} variants={scaleMinToMax} transition={{ duration: 0.5, delay: 0.2 }}>
                <source src="video/crystalblack.mp4" type="video/mp4"></source>
              </motion.video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
