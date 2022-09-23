import React from 'react';

const ButtonApp = (props) => {
  return (
    <div className="text-center xl:text-left">
      <button className="text-base font-bold text-white rounded-full px-36 py-14 md:text-md2 md:py-20 md:px-56 md:px-font-bold xl:px-40 xl:py-20 cursor:pointer xl:text-base bg-primary hover:bg-white hover:text-primary hover:shadow-xl">
        {props.btn_name}
      </button>
    </div>
  );
};

export default ButtonApp;
