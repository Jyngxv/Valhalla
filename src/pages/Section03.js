import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import useModal from '../components/useModal';
import Modal from '../components/Modal';
import { useCallback } from 'react';

const Section03 = () => {
  const FadeUp = {
    offscreen: {
      y: 70,
      opacity: 0,
    },
    onscreen: {
      y: 0,
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
    <section className="relative flex justify-center overflow-y-hidden py-256">
      <motion.div className="container w-100% my-auto py-auto" initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
        <div className="flex flex-row">
          <div className="flex basis-1/2">
            <motion.p className="xl:text-5xl font-Jakarta text-primary" variants={FadeUp} transition={{ duration: 1 }}>
              Petsonal platform
            </motion.p>
            <motion.p className="xl:text-5xl font-Jakarta" variants={FadeUp} transition={{ duration: 1, delay: 0.5 }}>
              based on&nbsp;<span className="linear-wipe-7"> science</span>
            </motion.p>
          </div>
          <div className="flex basis-1/2">
            <img src="img/p_img_3layers.png"></img>
          </div>
        </div>

        <div className="flex justify-center mb-36">
          <button
            className="flex justify-center px-32 py-12 text-base font-medium text-white border rounded-full opacity-80 border-primary hover:opacity-100 z-[888]"
            onClick={onClick}
          >
            Learn more
          </button>
        </div>
        <Modal modalOption={modalOption} />
        <div className="">
          <div className="absolute top-0 left-0 w-screen h-screen dimmed02 z-[-1]"></div>
          <div className="md:hidden absolute top-0 left-0 z-[-2] w-screen h-screen bg-center bg-cover bg-technology"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section03;
