import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import TabSection08 from "../components/TabSection08";

const Section08 = () => {
  return (
    <section className="bg-white">
      <div className="container px-24 py-128 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-24 md:mb-64">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="수의사가 직접 검증한"
            c_headline2="상품들이 대기중"
          />
        </div>
        <div className="flex flex-row">
          <TabSection08 />
        </div>
      </div>
    </section>
  );
};

export default Section08;
