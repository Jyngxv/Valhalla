import React from 'react';
import { motion } from 'framer-motion';
import TitleHeadline from '../components/TitleHeadline';
import Sliderbenefit from '../components/Sliderbenefit';

const Section12 = () => {
  // Famer Motion 정의
  const FadeUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section className="relative px-24 bg-gtw xl:px-0" initial="offscreen" whileInView="onscreen">
      <div className="container">
        <TitleHeadline
          textcolor1="text-black"
          textcolor2="text-black"
          textcolor3="text-neutral-800"
          c_headline1="Are you ready to"
          c_headline2="explore?"
          c_body1="By our strict standards, by 4 principles."
        />
      </div>
    </motion.section>
  );
};

export default Section12;
