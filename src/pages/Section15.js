import React from 'react';
import TitleHeadline from '../components/TitleHeadline';

const Section15 = () => {
  return (
    <section className="bg-center bg-cover xl:bg-fixed">
      <div className="container px-24 py-96 md:px-48 md:py-96 xl:px-0 xl:py-160">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="basis-2/3 md:basis-1/2">
              <TitleHeadline textcolor1="text-black" textcolor2="text-black" c_headline1="우리의 방식으로" c_headline2="WE ARE" />
              <button className="font-medium text-left bg-white py-14 xl:py-16 xl:text-base text-primary backdrop-blur-md rounded-8 xl:rounded-full hover:text-black">
                <a href="https://www.notion.so/pood/2ba504ad6d42438b8c64d23a9ed24e69" target="_blank" rel="noreferrer">
                  자세히 알아보기
                </a>
              </button>
            </div>
          </div>
          <div className="my-auto basis-1/3 md:basis-1/2">
            <div className="xl:ml-96 h-8 mt-[-20px] md:mt-[-12px] mx-auto bg-black w-100%"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section15;
