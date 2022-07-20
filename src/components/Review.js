import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import '../App.css';
const Review = (props) => {
  const store = classnames('w-56 h-56 my-auto', props.store);
  const reviewer = classnames('text-base lg:font-bold');
  const date = classnames('opacity-50 md:text-sm1 lg:text-sm2 font-regular');
  const title = classnames('mb-8 font-bold text-md1 lg:text-md2');
  const content = classnames('font-regular text-base lg:text-basse');
  return (
    <motion.div className="p-32 mb-24 border border-neutral-400 md:p-40 rounded-16 xl:rounded-none" whileHover={{ scale: 1.05 }}>
      <div className="flex flex-row mb-24">
        <div className="mr-16">
          <div className={store}></div>
        </div>
        <div className="flex flex-col">
          <p className={reviewer}>{props.reviewer}</p>
          <p className={date}>{props.date}</p>
        </div>
      </div>
      <p className={title}>{props.title}</p>
      <p className={content}>{props.content}</p>
    </motion.div>
  );
};

export default Review;
