import classNames from 'classnames';
import React from 'react';
import '../App.css';

const Commerce = (props) => {
  const text1 = classNames('text-md3 md:text-lg xl:text-2xl font-bold text-black');
  const text2 = classNames('text-md3 md:text-lg xl:text-2xl font-bold text-black mb-8 xl:mb-24');
  const text3 = classNames('text-md1 md:text-md2 font-medium xl:text-md2 text-neutral-800 pl-2');
  return (
    <div className="relative flex flex-col md:flex-row">
      <div className="basis-2/3">
        <img className="mr-auto mb-24 md:mb-0 w-100% md:w-400 lg:w-560 xl:w-640" src={props.c_img} alt=""></img>
      </div>
      <div className="bg-white md:my-auto xl:ml-64 basis-1/3">
        <div className="flex flex-col text-center md:text-left">
          <p className={text1}>
            <mark>{props.c_text1}</mark>
          </p>
          <p className={text2}>{props.c_text2}</p>
          <p className={text3}>{props.c_text3}</p>
        </div>
      </div>
      <div className="sec08Dimmed w-100% absolute bottom-[140px] md:bottom-0 h-96 md:h-160 lg:h-256"></div>
    </div>
  );
};

export default Commerce;
