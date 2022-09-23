import React from 'react';
import TitleHeadline from '../components/TitleHeadline';

const Section15 = () => {
  return (
    <section className="bg-[#0b0b0b] bg-center bg-cover xl:bg-fixed">
      <div className="container px-24 py-96 md:px-48 md:py-96 xl:px-0 lg:px-64 xl:py-160">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="basis-2/3 md:basis-1/2">
              <TitleHeadline textcolor1="text-white" textcolor2="text-white" c_headline1="Nothing greater" c_headline2="than a team" />
              <button className="font-medium text-left md:text-md2 py-14 xl:py-16 xl:text-base text-secondary backdrop-blur-md rounded-8 xl:rounded-full hover:text-white">
                <a href="https://www.notion.so/pood/2ba504ad6d42438b8c64d23a9ed24e69" target="_blank" rel="noreferrer">
                  Meet us
                </a>
              </button>
            </div>
          </div>
          <div className="hidden my-auto md:block basis-1/3 md:basis-1/2">
            <div className="xl:ml-96 h-8 mt-[-20px] md:mt-[-12px] mx-auto bg-secondary w-100%"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section15;
