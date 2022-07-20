import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import TabSection08 from '../components/TabSection08';

const Section11 = () => {
  return (
    <section className="bg-white">
      <div className="container px-24 pb-0 pt-128 md:px-48 md:pt-128 xl:px-0 xl:pt-192 xl:pb-64 md:pb-48">
        <div className="">
          <TitleHeadline
            textalign="text-center"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="할인은 기본 장착"
            c_headline2="즐거움은 비장의 무기"
          />
        </div>
      </div>
      <div className="flex flex-row text-center md:pl-0 w-100% md:pb-160 xl:pb-192 pb-128">
        <TabSection08 />
      </div>
    </section>
  );
};

export default Section11;
