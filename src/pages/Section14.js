import React from 'react';
import Count from '../components/Count';

const Section14 = () => {
  const petnumber = <Count />;
  const count = <span>{petnumber}</span>;
  return (
    <section className="relative z-10 overflow-y-hidden bg-black xl:py-0">
      <div className="container relative my-auto md:py-96 md:px-48 lg:py-128 lg:px-64 xl:py-256 xl:px-0">
        <div className="flex flex-col mt-[380px] md:mt-0">
          {/* <p className="text-5xl font-bold tracking-wider text-center text-white md:text-left md:text-7xl xl:text-9xl font-Bebas">{count}</p> */}
          <p className="text-2xl font-bold text-center text-white md:text-left md:text-6xl xl:text-6xl font-Jakarta mt-[-20px] md:mt-8">{count} Petsonals</p>
          <p className="mb-24 text-2xl font-regular  text-center text-white md:text-left md:text-6xl xl:text-6xl md:mb-96 xl:mb-128 font-Jakarta mt-[-8px] md:mt-0">
            Already with us
          </p>
          <div className="flex flex-row">
            <div className="mx-auto mb-64 border-white md:border-t md:mb-0 md:mr-24 basis-1/2">
              <a className="hover:opacity-50" href="https://play.google.com/store/apps/details?id=com.pood.pet" target="_blank" rel="noreferrer">
                <div className="flex flex-row justify-center mt-24 md:justify-start md:mt-48">
                  <div className="w-24 md:w-48">
                    <img src="img/google.png" alt=""></img>
                  </div>
                  <div className="flex my-auto ml-16 md:ml-24">
                    <p className="font-bold text-white md:text-lg xl:text-lg">Google Play</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="border-white md:border-t md:ml-24 basis-1/2">
              <a className="hover:opacity-50" href="https://apps.apple.com/KR/app/id1592438102?mt=8" target="_blank" rel="noreferrer">
                <div className="flex flex-row justify-center mt-24 md:justify-start md:mt-48">
                  <div className="w-24 md:w-48">
                    <img src="img/apple.png" alt=""></img>
                  </div>
                  <div className="flex my-auto ml-16 md:ml-24">
                    <p className="font-bold text-white md:text-lg xl:text-lg">App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:absolute top-0 left-0 w-screen h-full dimmed02 z-[-1]"></div>
      {/* <video
        autoPlay
        className="hidden md:block absolute top-[33%] md:top-50% left-50% translate-x-[-50%] translate-y-[-50%] scale-150 md:scale-125 lg:scale-110 xl:scale-75  h-full z-[-2]"
        loop
        muted
      >
        <source src="video/p_video_petsonal.mp4"></source>
      </video> */}
      <div className="md:hidden absolute top-0 left-0 z-[-1] w-screen h-screen bg-center bg-cover bg-card"></div>
    </section>
  );
};

export default Section14;
