import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div>
      <nav className="absolute z-20 w-full bg-transparent">
        <div className="px-24 mx-auto bg-transparent md:px-48 xl:px-0 xl:w-1280">
          <div className="flex flex-row flex-wrap py-32 md:py-48 xl:py-48">
            <div className="flex-none">
              <img
                className="h-40 md:h-64 xl:h-48 logo"
                src="img/Logo.png"
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse items-center grow">
              <ul className="hidden md:block xl:block">
                <li className="mr-48 font-medium text-white md:text-base xl:text-tiny opacity-70 hover:opacity-100">
                  <a href="mailto:help@pood.pet?subject=푸드 서비스 문의합니다.">
                    문의하기
                  </a>
                </li>
                <li className="font-medium text-white md:text-base xl:text-tiny opacity-70 hover:opacity-100">
                  <a href="mailto:pood@pood.pet?subject=입점 제휴 문의합니다.">
                    입점 및 제휴문의
                  </a>
                </li>
              </ul>
              <div className="xl:hidden"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
