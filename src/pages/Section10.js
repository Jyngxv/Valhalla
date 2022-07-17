import React from "react";
import TitleHeadline from "../components/TitleHeadline";

const Section10 = () => {
  return (
    <section className="relative overflow-y-hidden">
      <div className="container px-24 xl:pb-0 py-128 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-32 xl:mb-64">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="모든 상품은"
            c_headline2="수의사가 직접 검수"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
          />
        </div>
      </div>
    </section>
  );
};

export default Section10;
