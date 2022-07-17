import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import ButtonApp from "../components/ButtonApp";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Count from "../components/Count";

const Section11 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.2, 1.2]);
  const petnumber = <Count />;
  const count = <span>{petnumber}마리 친구들이</span>;
  return (
    <section className="bg-center bg-cover bg-norepeat">
      <div className="container px-24 py-96 md:px-48 md:py-160 xl:px-0 xl:py-256">
        <div className="mb-24">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-primary"
            textcolor3="text-neutral-900"
            c_headline1={count}
            c_headline2="매일 건강해지고 있어요"
            textalign="text-center"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mb-96 xl:mb-128">
            <ButtonApp btn_name="푸드 시작하기" />
          </div>
          <motion.div className="mx-auto w-90% xl:w-1024" style={{ scale }}>
            <img className="w-80% mx-auto" src="img/device12.png" alt=""></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
