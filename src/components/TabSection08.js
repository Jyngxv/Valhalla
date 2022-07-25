// import React, { useState } from 'react';
import React from "react";
import "../style/tab.css";
import Commerce from "./Commerce";

const menuList = {
  0: (
    <Commerce
      c_text1="오늘이 지나면"
      c_text2="신데랄라처럼 사라져요"
      c_text3="365일 24시간 타임세일"
      c_img="img/p_device_commerce_today.png"
    ></Commerce>
  ),
  1: (
    <Commerce
      c_text1="차원이 다른"
      c_text2="빠른 직배송 서비스"
      c_text3="직배송 상품으로 한번에, 빠르게"
      c_img="img/p_device_commerce_delivery.png"
    ></Commerce>
  ),
  2: (
    <Commerce
      c_text1="인기가 많다는 것은"
      c_text2="그만한 이유가 있는 법"
      c_text3="오늘, 주간, 월간 베스트 상품"
      c_img="img/p_device_commerce_ranking.png"
    ></Commerce>
  ),
  3: (
    <Commerce
      c_text1="천하제일"
      c_text2="멍냥이 자랑대회"
      c_text3="참가만해도 포인트 지급"
      c_img="img/p_device_commerce_awards.png"
    ></Commerce>
  ),
};

class TabSection08 extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };

  render() {
    return (
      <div className="flex flex-col w-100% md:w-100% tab02 overflow-x-auto">
        <div className="mb-32 md:mx-auto md:mb-48 lg:mb-64 xl:mb-96">
          <ul className="flex justify-center py-16 overflow-x-scroll flex-nowrap whitespace-nowrap">
            <li
              className={`${this.state.menu === 0 ? "active" : ""}`}
              onClick={() => this.changeMenu(0)}
            >
              <p className="mr-16 text-base font-bold leading-loose cursor-pointer md:mr-24 md:text-md3 xl:text-md3 xl:mr-24 xl:hover:text-black">
                오늘만 할인
              </p>
            </li>
            <li
              className={`${this.state.menu === 1 ? "active" : ""}`}
              onClick={() => this.changeMenu(1)}
            >
              <p className="mr-16 text-base font-bold leading-loose cursor-pointer md:mr-24 md:text-md3 xl:text-md3 xl:mr-24 xl:hover:text-black">
                푸드 배송
              </p>
            </li>
            <li
              className={`${this.state.menu === 2 ? "active" : ""}`}
              onClick={() => this.changeMenu(2)}
            >
              <p className="mr-16 text-base font-bold leading-loose cursor-pointer md:mr-24 md:text-md3 xl:text-md3 xl:mr-24 xl:hover:text-black">
                랭킹
              </p>
            </li>
            <li
              className={`${this.state.menu === 3 ? "active" : ""}`}
              onClick={() => this.changeMenu(3)}
            >
              <p className="text-base font-bold leading-loose cursor-pointer md:mr-24 md:text-md3 xl:mr-0 xl:text-md3 hover:text-black">
                포토 어워즈
              </p>
            </li>
          </ul>
        </div>
        <div className="mx-auto px-24 md:px-48 md:w-100% xl:w-1280">
          <div className="mx-auto overflow-hidden xl:ml-auto contentArea ">
            {menuList[this.state.menu]}
          </div>
        </div>
      </div>
    );
  }
}

export default TabSection08;
