import React from 'react';
import classnames from 'classnames';
// linear - wipe;
const TitleDisplay = (props) => {
  const display1 = classnames(
    'xl:ml-0 xl:pl-0 xl:rotate-0 text-center xl:text-left text-4xl md:text-8xl lg:text-9xl xl:text-8xl font-Bebas font-extrabold lg:tracking-wide tracking-tight',
    props.textcolor1
  );
  const display2 = classnames(
    'mt-[-28px] xl:mt-[-24px] xl:bg-transparent xl:linear-wipe-1 xl:rotate-0 text-center xl:text-left text-4xl md:text-8xl xl:text-8xl font-extrabold lg:text-9xl xl:mb-0 md:mb-8 font-Bebas lg:tracking-wide tracking-tight',
    props.textcolor2
  );
  const body1 = classnames('opacity-70 text-center xl:text-left text-sm2 md:text-md2 xl:text-md2 font-regular md:font-bold text-white whitespace-pre-wrap');
  const body2 = classnames('text-center xl:text-left text-base md:text-base xl:text-md2 font-bold text-white whitespace-pre-wrap');

  return (
    <div className="pb-48 md:pb-64 xl:pb-64 lg:pb-32">
      <div className="flex flex-col h-auto">
        <p className={display1}>{props.c_display1}</p>
        <p className={display2}>{props.c_display2}</p>
        <p className={body1}>{props.c_body1}</p>
        <p className={body2}>{props.c_body2}</p>
      </div>
    </div>
  );
};

export default TitleDisplay;
