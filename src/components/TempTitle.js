import React from 'react';
import classnames from 'classnames';

const Title = (props) => {
  const title1 = classnames('text-md md:text-md xl:text-md font-bold', props.textcolor1);
  const title2 = classnames('text-md md:text-md xl:text-md font-bold mb-24', props.textcolor2);
  const body3 = classnames('text-base md:text-base xl:text-base font-medium text-neutral-800 whitespace-pre-wrap');
  return (
    <div className="wrapper">
      <div className="flex flex-col">
        <p className={title1}>{props.c_title1}</p>
        <p className={title2}>{props.c_title2}</p>
        <p className={body3}>{props.c_body1}</p>
        <p className={body3}>{props.c_body2}</p>
      </div>
    </div>
  );
};

export default Title;
