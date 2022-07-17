import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import TabSection08 from "../components/TabSection08";

const Section11 = () => {
  return (
    <section className="bg-white">
      <div className="container px-24 py-128 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-24 md:mb-64">
          <TitleHeadline
            textalign="text-center"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="할인은 기본 장착"
            c_headline2="즐거움은 비장의 무기"
          />
        </div>
        <div className="flex flex-row text-center">
          <TabSection08 />
        </div>
      </div>
    </section>
  );
};

export default Section11;
