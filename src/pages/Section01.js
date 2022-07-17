import React from "react";
import Dimmed from "../components/Dimmed";
import TitleDisplay from "../components/TitleDisplay";
import ButtonApp from "../components/ButtonApp";

const Section01 = () => {
  return (
    <section className="h-screen">
      <div>
        <Dimmed />
        <div className="absolute bottom-[7%] w-100% xl:w-1280 xl:left-0 xl:right-0 mx-auto xl:bottom-10%  overflow-x-hidden">
          <div className="mx-auto xl:px-0">
            <TitleDisplay
              textcolor1="text-white"
              textcolor2="text-white"
              c_display1="THE ANXIETY"
              c_display2="IS OVER"
              c_body1="내 반려동물에게 딱 맞춘 커머스, 푸드"
            />
          </div>
          <div>
            <a
              href="https://pood.onelink.me/TunM/dee08b7c"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonApp btn_name="푸드 앱 다운로드" />
            </a>
          </div>
        </div>
        <video className="nt-video" autoPlay loop playsInline muted>
          <source src="video/toss-blog.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Section01;
