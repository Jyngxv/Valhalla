import React from "react";
import TitleHeadline from "../components/TitleHeadline";

const Section12 = () => {
  return (
    <section className="bg-center bg-cover xl:bg-fixed bg-bg03">
      <div className="container px-24 py-96 md:px-48 md:py-96 xl:px-0 xl:py-160">
        <div className="mb-24">
          <TitleHeadline
            textcolor1="text-white"
            textcolor2="text-white"
            c_headline1="한걸음씩 앞서가는"
            c_headline2="우리 이야기"
          />
        </div>
        <div className="flex flex-col">
          <div className="">
            <button className="px-24 font-bold bg-white py-14 xl:px-32 xl:py-16 xl:text-base text-primary backdrop-blur-md rounded-8 xl:rounded-full hover:bg-transparent">
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
