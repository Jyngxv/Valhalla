import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="relative menubar">
      <nav className="fixed xl:top-16 xl:left-16 xl:right-16 z-[999] rounded-8 backdrop-blur-xl">
        <div className="px-24 mx-auto bg-transparent md:px-48 xl:px-0">
          <div className="flex flex-row flex-wrap py-32 md:py-48 xl:py-[14px] xl:px-16">
            <div className="flex">
              <img className="flex h-40 px-16 my-auto md:h-64 xl:h-36 logo xl:mr-16" src="img/logo.png" alt="" />
            </div>
            <div className="flex flex-row items-center">
              <ul className="flex font-bold">
                <li className="flex px-12 py-12 text-white align-middle xl:px-16 md:text-base xl:text-sm2 font-Jakarta hover:bg-[#151b43] rounded-8">
                  <a className="my-auto" href="#">
                    POOD App
                  </a>
                </li>
                <li className="flex px-12 py-12 text-white align-middle xl:px-16 md:text-base xl:text-sm2 font-Jakarta hover:bg-[#151b43] rounded-8">
                  <a className="my-auto" href="#">
                    <label className="bg-[#fd2525] px-8 py-2 text-xs1 rounded-12 mr-8">UPCOMING</label>Dayone
                  </a>
                </li>
                <li className="flex px-12 py-12 text-white align-middle xl:px-16 md:text-base xl:text-sm2 font-Jakarta hover:bg-[#151b43] rounded-8">
                  <a className="my-auto" href="#">
                    <label className="bg-[#fd2525] px-8 py-2 text-xs1 rounded-12 mr-8">UPCOMING</label>Brand Guide
                  </a>
                </li>
                <li className="flex px-12 py-12 text-white align-middle xl:px-16 md:text-base xl:text-sm2 font-Jakarta hover:bg-[#151b43] rounded-8">
                  <a className="my-auto" href="#">
                    <label className="bg-[#fd2525] px-8 py-2 text-xs1 rounded-12 mr-8">UPCOMING</label>Pet MBTI
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row-reverse items-center grow">
              <ul className="hidden my-auto md:block xl:flex">
                <li className="flex px-12 py-12 text-white align-middle xl:px-16 md:text-base xl:text-sm1 font-Jakarta hover:bg-[#151b43] rounded-8 font-medium">
                  <a className="my-auto" href="https://www.notion.so/pood/2ba504ad6d42438b8c64d23a9ed24e69" target="blank*">
                    Career
                  </a>
                </li>
                <li className="flex px-12 py-12 text-white align-middle xl:px-16 md:text-base xl:text-sm1 font-Jakarta hover:bg-[#151b43] rounded-8 xl:mr-16 font-medium">
                  <a className="my-auto" href="mailto:help@pood.pet?subject=푸드 서비스 문의합니다.">
                    Contact Us
                  </a>
                </li>
                <li className="hidden xl:flex md:text-base ">
                  <button className="px-24 py-12 align-middle bg-[#1279ff] hover:bg-[#4897ff] rounded-8">
                    <div className="flex flex-row">
                      <div className="flex justify-center my-auto">
                        <img className="w-16" src="img/apple.png" />
                      </div>
                      <div className="flex justify-center px-8 my-auto">
                        <img className="w-16" src="img/google.png" />
                      </div>
                      <div className="">
                        <a className="font-bold text-white font-Jakarta text-sm2" href="https://pood.onelink.me/kQDJ/mqn86vma" target="_blank" rel="noreferrer">
                          Download
                        </a>
                      </div>
                    </div>
                  </button>
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
