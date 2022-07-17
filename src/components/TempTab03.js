import React, { useState, Compoent } from 'react';
import '../style/tab.css';
import { tab } from '@testing-library/user-event/dist/tab';

const menuList = {
  0: (
    <div className="pb-64 pl-24 overflow-x-auto whitespace-nowrap">
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen02.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen02.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen02.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen02.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen02.png"></img>
      </div>
    </div>
  ),
  1: (
    <div className="pb-64 pl-24 overflow-x-auto md:pl-96 whitespace-nowrap ">
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen01.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen01.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen01.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen01.png"></img>
      </div>
      <div className="inline-block mr-24">
        <img className="shadow-xl rounded-2xl w-240" src="img/screen01.png"></img>
      </div>
    </div>
  ),
};

class Tab03 extends React.Component {
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
      <div className="flex flex-col xl:flex-row w-100%">
        <div className="flex items-center pl-24 mb-32 grow xl:mb-0 xl:basis-1/3">
          <ul>
            <p className="text-base font-bold leading-loose xl:block xl:text-md">
              <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>
                라이프사이클 관리
              </li>
            </p>
            <p className="text-base font-bold leading-loose xl:block xl:text-md">
              <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>
                고민 관리
              </li>
            </p>
          </ul>
        </div>
        <div className="xl:basis-2/3">
          <div className="contentArea">{menuList[this.state.menu]}</div>
        </div>
      </div>
    );
  }
}

export default Tab03;
