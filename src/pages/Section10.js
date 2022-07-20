import React from 'react';
import TitleHeadline from '../components/TitleHeadline';

const Section10 = () => {
  return (
    <section className="relative overflow-y-hidden">
      <div className="container px-24 pb-64 xl:pb-0 pt-128 md:px-48 md:py-128 xl:px-0 xl:py-192">
        <div className="xl:mb-96 xl:w-50%">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="수의사가 직접"
            c_headline2="검수한 상품들만"
            c_body1="상품 전문가와 수의사가 2단계에 걸쳐 4가지 기준으로 철저하게 검증한 상품들만 판매합니다. 푸드에 있다는 것은 믿을만하다는 얘기겠죠."
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:pb-192">
        <div className="md:basis-1/1 xl:basis-1/3">
          <img className="object-cover h-100% w-100% max-h-[924px]" src="img/p_people_vet_01.jpg"></img>
        </div>
        <div className="md:basis-1/1 xl:basis-2/3">
          <div className="flex flex-wrap">
            <div className="w-100% px-24 md:px-48 pt-128 border-b md:border-r md:border-b xl:border-t xl:border-b xl:border-r border-neutral-400 md:pt-256 pb-48 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <div className="flex flex-col">
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 1</p>
                <p className="font-extrabold text-md3 md:text-2xl">50개 푸드 기준</p>
              </div>
            </div>
            <div className="w-100% px-24 md:px-48 border-b md:border-b xl:border-t xl:border-b xl:border-r border-neutral-400 pt-128 pb-48 md:pt-256 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <div className="flex flex-col">
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 2</p>
                <p className="font-extrabold text-md3 md:text-2xl">성분 면밀 검토 </p>
              </div>
            </div>
            <div className="w-100% px-24 md:px-48 pt-128 border-b md:border-r md:border-b xl:border-b xl:border-r border-neutral-400 md:pt-256 pb-48 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <div className="flex flex-col">
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 3</p>
                <p className="font-extrabold text-md3 md:text-2xl">제조사 시설 검토</p>
              </div>
            </div>
            <div className="w-100% px-24 md:px-48 pt-128 border-b md:border-b xl:border-b xl:border-r border-neutral-400 md:pt-256 pb-48 md:pb-96 md:basis-1/1 xl:basis-1/2 hover:text-white hover:bg-black md:w-50%">
              <div className="flex flex-col">
                <p className="pl-2 mb-8 md:mb-16 text-md2 font-Bebas">Principle 4</p>
                <p className="font-extrabold text-md3 md:text-2xl">수의사 직접 검증</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
