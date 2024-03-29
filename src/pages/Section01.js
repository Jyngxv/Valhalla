import React from 'react';
import Dimmed from '../components/Dimmed';
import TitleDisplay from '../components/TitleDisplay';
import ButtonApp from '../components/ButtonApp';
import '../App.css';
import Slidermain from '../components/Slidermain';

const Section01 = () => {
  return (
    <section className="bg-white">
      <Slidermain />
      {/* <div>
        <Dimmed />
        <div className="absolute bottom-[7%] w-100% xl:w-1280 xl:left-0 xl:right-0 mx-auto xl:bottom-5%  overflow-x-hidden">
          <div className="mx-auto xl:px-0">
            <TitleDisplay
              textcolor1="text-white"
              textcolor2="text-white"
              c_display1="Petsonal platform"
              c_display2="based on science"
              c_body1="POOD is Next-generation pet commerce"
            />
          </div>
          <div className="xl:hidden">
            <a href="https://pood.onelink.me/TunM/dee08b7c" target="_blank" rel="noreferrer">
              <ButtonApp btn_name="Get started" />
            </a>
          </div>
        </div>
        <video autoPlay className="hidden md:block nt-video z-[-1]" loop muted>
          <source src="video/p_video_app.mp4"></source>
        </video>
        <div className="md:hidden absolute top-0 left-0 z-[-1] w-screen h-screen bg-center bg-cover bg-petsonal"></div>
      </div> */}
    </section>
  );
};

export default Section01;
