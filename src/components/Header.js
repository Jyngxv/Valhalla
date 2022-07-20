import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div>
      <nav className="absolute z-20 w-full bg-transparent">
        <div className="px-24 mx-auto bg-transparent md:px-48 xl:px-0 xl:w-1280">
          <div className="flex flex-row flex-wrap py-32 md:py-48 xl:py-48">
            <div className="flex">
              <img className="flex h-40 my-auto md:h-64 xl:h-48 logo" src="img/Logo.png" alt="" />
            </div>
            <div className="flex flex-row-reverse items-center grow">
              <ul className="hidden my-auto font-bold md:block xl:flex">
                <li className="text-white xl:mr-48 md:text-base xl:text-tiny hover:opacity-100">
                  <a className="my-auto" href="mailto:help@pood.pet?subject=푸드 서비스 문의합니다.">
                    입점 및 제휴 문의
                  </a>
                </li>
                <li className="hidden font-medium text-white xl:block md:text-base xl:text-tiny hover:opacity-100">
                  <a
                    className="px-24 py-16 font-bold text-white rounded-full bg-primary hover:border-white hover:bg-white hover:text-primary"
                    href="https://pood.onelink.me/TunM/dee08b7c"
                    target="_blank"
                    rel="noreferrer"
                  >
                    앱 다운로드
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
