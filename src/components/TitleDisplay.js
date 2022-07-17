import React from "react";
import classnames from "classnames";
// linear - wipe;
const TitleDisplay = (props) => {
  const display1 = classnames(
    "xl:ml-0 xl:pl-0 xl:rotate-0 text-center xl:text-left text-8xl md:text-7xl xl:text-8xl font-Bebas font-extrabold",
    props.textcolor1
  );
  const display2 = classnames(
    "mt-[-36px] xl:mt-[-24px] xl:bg-transparent xl:linear-wipe text-primary xl:text-secondary xl:rotate-0 text-center xl:text-left text-3xl md:text-7xl xl:text-8xl font-extrabold xl:mb-0 mb-8 mt-[-16px] font-Bebas"
  );
  const body1 = classnames(
    "text-center xl:text-left text-base md:text-md2 xl:text-md3 font-medium text-white whitespace-pre-wrap"
  );
  const body2 = classnames(
    "text-center xl:text-left text-base md:text-base xl:text-md2 font-bold text-white whitespace-pre-wrap"
  );

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
