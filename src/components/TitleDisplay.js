import React from 'react';
import classnames from 'classnames';
// linear - wipe;
const TitleDisplay = (props) => {
  const display1 = classnames(
    'xl:ml-0 xl:pl-0 text-center xl:text-left text-xl md:text-5xl lg:text-7xl xl:text-7xl font-Jakarta font-extrabold mb-16',
    props.textcolor1
  );
  const display2 = classnames(
    'mt-[-20px] md:mt-[-32px] lg:mt-[-24px] xl:mt-[-24px] text-center xl:text-left text-xl md:text-5xl xl:text-7xl font-regular lg:text-6xl xl:mb-32 md:mb-8 font-Jakarta mb-8',
    props.textcolor2
  );
  const body1 = classnames(
    'opacity-70 text-center xl:text-left text-sm2 md:text-md2 xl:text-md2 font-regular md:font-regular text-white whitespace-pre-wrap font-Jakarta'
  );
  const body2 = classnames('text-center xl:text-left text-base md:text-base xl:text-md2 font-regular text-white whitespace-pre-wrap');

  return (
    <div className="pb-48 md:pb-48 xl:pb-64 lg:pb-48">
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
