import React, { useState, Compoent } from 'react';
import '../style/tab.css';
import { tab } from '@testing-library/user-event/dist/tab';
import { motion } from 'framer-motion';

const menuList = {
  0: (
    <div>
      <div className="relative">
        <motion.div className="absolute z-50 w-[300px] p-32 bg-neutral-900 right-[-32px] bottom-32" whileHover={{ scale: 1.1 }}>
          <div className="flex flex-col">
            <p className="mb-24 text-base font-bold text-white">
              Front End Tools Today we’re going to dive into useful UI development tools for developers and designers.
            </p>
            <div className="flex flex-row">
              <img className="w-48 h-48 mr-16" src="img/avatar.png"></img>
              <div className="flex flex-col">
                <p className="font-bold text-white text-sm2">김정민</p>
                <p className="font-medium text-white opacity-50">푸드 수의사</p>
              </div>
            </div>
          </div>
        </motion.div>
        <img className="mx-auto w-100% shadow-xl hover:shadow-2xl" src="img/device14.png"></img>
      </div>
    </div>
  ),
  1: (
    <div>
      <div className="relative">
        <motion.div className="absolute z-50 w-[300px] p-32 bg-neutral-900 right-[-32px] bottom-32" whileHover={{ scale: 1.1 }}>
          <div className="flex flex-col">
            <p className="mb-24 text-base font-bold text-white">
              Learning as we go. Took me a bit to get both working. Managed to get this to work well with a little help from Google.
            </p>
            <div className="flex flex-row">
              <img className="w-48 h-48 mr-16" src="img/avatar.png"></img>
              <div className="flex flex-col">
                <p className="font-bold text-white text-sm2">김정민</p>
                <p className="font-medium text-white opacity-50">푸드 수의사</p>
              </div>
            </div>
          </div>
        </motion.div>
        <img className="mx-auto w-100% shadow-xl hover:shadow-2xl" src="img/device14.png"></img>
      </div>
    </div>
  ),
};

class Tab extends React.Component {
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
      <div className="flex flex-col w-100%">
        <div className="flex flex-row mx-auto mb-40">
          <div className="px-20 py-20 my-auto bg-white hover:bg-neutral-300 rounded-16">
            <div className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>
              <div className="flex flex-row">
                <div className="my-auto">
                  <img className="w-48 mx-auto mr-16" src="img/img_lifeicon.png"></img>
                </div>
                <div className="my-auto">
                  <p className="font-bold text-md1">라이프사이클 관리</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 py-20 my-auto bg-white hover:bg-neutral-300 rounded-16">
            <div className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>
              <div className="flex flex-row">
                <div className="my-auto">
                  <img className="w-48 mx-auto mr-16" src="img/img_anxicon.png"></img>
                </div>
                <div className="my-auto">
                  <p className="font-bold text-md1">고민관리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:basis-2/3">
          <div className="ml-auto contentArea">{menuList[this.state.menu]}</div>
        </div>
      </div>
    );
  }
}

export default Tab;
