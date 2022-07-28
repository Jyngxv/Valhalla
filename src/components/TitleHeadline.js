import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';

const TitleHeadline = (props) => {
  const FadeUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
    },
  };
  const headline1 = classnames('text-xl md:text-3xl xl:text-4xl font-extrabold', props.textcolor1, props.textalign);
  const headline2 = classnames('text-xl md:text-3xl xl:text-4xl font-extrabold mb-24 mt-[-4px]', props.textcolor2, props.textalign);
  const body1 = classnames('text-base md:text-base xl:text-md1 font-regular  whitespace-pre-wrap', props.textcolor3);
  const body2 = classnames('text-base md:text-base xl:text-md2 font-medium  whitespace-pre-wrap', props.textcolor3);
  return (
    <div className="wrapper">
      <div className="flex flex-col">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
          <motion.p className={headline1} variants={FadeUp} transition={{ duration: 0.25 }}>
            {props.c_headline1}
          </motion.p>
          <motion.p className={headline2} variants={FadeUp} transition={{ duration: 0.25, delay: 0.2 }}>
            {props.c_headline2}
          </motion.p>
          <motion.p className={body1} variants={FadeUp} transition={{ duration: 0.25, delay: 0.25 }}>
            {props.c_body1}
          </motion.p>
          <motion.p className={body2} variants={FadeUp} transition={{ duration: 0.25, delay: 0.3 }}>
            {props.c_body2}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleHeadline;
