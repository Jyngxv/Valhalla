import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import ButtonApp from '../components/ButtonApp';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Count from '../components/Count';

const Section14 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.2, 1.2]);
  const petnumber = <Count />;
  const count = <span>{petnumber}마리 친구들이</span>;
  return (
    <section className="bg-center bg-cover md:bg-fixed bg-bg02 bg-norepeat">
      <div className="container px-24 my-auto py-96 md:px-48 xl:px-0 xl:py-192">
        <div className="flex flex-col">
          <p className="text-xl font-bold text-center text-white md:text-left md:mb-16 md:text-4xl xl:text-5xl">{count}</p>
          <p className="mb-24 text-xl font-bold text-center text-white md:text-left md:text-4xl xl:text-5xl md:mb-96 xl:mb-128">매일 건강해지고 있어요.</p>
          <div className="flex flex-row">
            <div className="mx-auto mb-64 border-white md:border-t md:mb-0 md:mr-24 basis-1/2">
              <a className="hover:opacity-50" href="https://play.google.com/store/apps/details?id=com.pood.pet" target="_blank" rel="noreferrer">
                <div className="flex flex-row justify-center mt-24 md:justify-start md:mt-48 ">
                  <div className="w-24 md:w-48">
                    <img src="img/google.png"></img>
                  </div>
                  <div className="flex my-auto ml-16 md:ml-24">
                    <p className="font-bold text-white md:text-lg xl:text-xl">Google Play</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="border-white md:border-t md:ml-24 basis-1/2">
              <a className="hover:opacity-50" href="https://apps.apple.com/KR/app/id1592438102?mt=8" target="_blank" rel="noreferrer">
                <div className="flex flex-row justify-center mt-24 md:justify-start md:mt-48">
                  <div className="w-24 md:w-48">
                    <img src="img/apple.png"></img>
                  </div>
                  <div className="flex my-auto ml-16 md:ml-24">
                    <p className="font-bold text-white md:text-lg xl:text-xl">App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section14;
