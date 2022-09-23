import React from 'react';
import { motion } from 'framer-motion';
import SliderSection04 from '../components/SliderSection04';
import useModal from '../components/useModal';
import Modal from '../components/Modal';
import { useCallback } from 'react';
const Section04 = () => {
  // Famer Motion 정의
  const leftToRight = {
    offscreen: {
      x: -60,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
    },
  };
  const [modalOption, showModal] = useModal();
  const onClick = useCallback(() => {
    showModal(
      true,
      '푸드 알고리즘은 가장 과학적인 방법에 기반하고 있습니다. 수의학에 기본이 되는 NRC, AAFCO, FEDIAF등 국제 기관의 연구 자료와 논문을 토대로 설계하였습니다. 반려동물의 기본이되는 체중정보, 품종, 중성화여부, 나이를 기반으로 분석하고 여기에 기호성, 알러지, 보호자의 고민 정보를 결합하여 복합적으로 내 반려동물을 이해합니다. 수십만 가지의 데이터를 통해 분석해내는 시간은 단 5초도 걸리지 않을만큼 기술의 진보를 이루어냈습니다. 또한 푸드 알고리즘은 서울대학교 수의과대학과 공동 연구를 진행하고 있어 단순한 기술을 넘어 과학을 담았습니다.',
      null
    );
  });
  return (
    <section className="relative overflow-y-hidden bg-white md:block">
      <div className="container relative px-24 py-64 md:px-48 md:py-128 lg:px-64 xl:px-0">
        <div className="flex flex-col xl:flex-row xl:h-960">
          <div className="relative flex mb-32 xl:basis-1/2 xl:mb-0">
            <div className="xl:absolute xl:top-[42%] xl:translate-y-[-42%]">
              <div className="flex flex-col ">
                <motion.div className="flex flex-col" initial="offscreen" whileInView="onscreen">
                  <motion.p
                    className="text-3xl font-bold text-[#222] md:text-7xl lg:text-9xl xl:text-10xl font-Jakarta"
                    variants={leftToRight}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    hyper
                  </motion.p>
                  <motion.p
                    className="text-3xl font-bold text-[#222] md:text-7xl lg:text-9xl xl:text-10xl  font-Jakarta md:mt-[-20px] xl:mt-[-48px]"
                    variants={leftToRight}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    petsonalized
                  </motion.p>
                  <motion.p
                    className="text-3xl font-bold  text-[#222] md:text-7xl lg:text-9xl xl:text-10xl font-Jakarta md:mt-[-20px] xl:mt-[-48px]"
                    variants={leftToRight}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    technology
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="relative hidden xl:flex xl:basis-1/2 z-[10]">
            <div className="container px-24 md:block py-128 md:px-48 md:py-0 xl:px-0 xl:pt-96 xl:pb-192">
              <div className="flex flex-col overflow-hidden">
                <div className="relative">
                  <div className="w-[370px] h-[820px] mx-auto">
                    <div className="absolute left-0 right-0 z-40 mx-auto w-[398px]">
                      <img src="../img/p_device_blank.png" alt="" />
                    </div>
                    <div className="relative z-[2] overflow-y-auto" initial="offscreen" whileInView="onscreen">
                      <SliderSection04 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute hidden md:block md:w-100% top-50% left-50% translate-x-[-50%] translate-y-[-50%] z-[-1]">
              <div className="flex justify-center">
                <img className="w-640 z-[-1]" src="img/logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex md:hidden">
            <div className="container">
              <div className="flex flex-col overflow-hidden">
                <div className="relative">
                  <div className="w-[298px] h-[660px] mx-auto">
                    <div className="absolute left-0 right-0 z-40 mx-auto w-[320px]">
                      <img src="../img/p_device_blank.png" alt="" />
                    </div>
                    <div className="relative z-[2] overflow-y-auto" initial="offscreen" whileInView="onscreen">
                      <SliderSection04 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute hidden md:block md:w-100% top-50% left-50% translate-x-[-50%] translate-y-[-50%] z-[-1]">
              <div className="flex justify-center">
                <img className="w-640 z-[-1]" src="img/logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
