import React from 'react';
import classnames from 'classnames';
import Dimmed from './Dimmed';
// linear - wipe;
const VideoSlider = (props) => {
  const title1 = classnames(
    'pl-24 xl:ml-0 xl:pl-0 text-left md:text-center xl:text-left text-lg md:text-4xl lg:text-5xl xl:text-6xl font-Jakarta font-regular mb-16',
    props.textcolor1
  );
  const title2 = classnames(
    'pl-24 xl:pl-0 mt-[-20px] md:mt-[-32px] lg:mt-[-24px] xl:mt-[-24px] text-left md:text-center xl:text-left text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:text-6xl xl:mb-16 md:mb-8 font-Jakarta mb-8',
    props.textcolor2
  );
  const body1 = classnames(
    'opacity-70 pl-24 md:pl-0 text-left md:text-center xl:text-left text-sm1 md:text-md2 xl:text-md2 font-regular md:font-regular text-white whitespace-pre-wrap font-Jakarta'
  );
  const body2 = classnames('text-center xl:text-left text-base md:text-base xl:text-md2 font-regular text-white whitespace-pre-wrap');
  const content = classnames('w-full h-full xl:pt-360 rounded-8 overflow-hidden');
  const poster = classnames('absolute top-0 left-0 w-full h-full bg-center xl:hidden bg-cover z-[-2]', props.mimg);
  const url = props.url;
  const vurl = props.vurl;
  const mimg = props.mimg;
  return (
    <section className="container">
      <div className={content}>
        <div className="z-40 pb-48 md:pb-48 xl:pb-64 lg:pb-48">
          <div className="flex flex-col h-auto mb-32 pt-[144px] md:pt-[440px] lg:pt-[360px] xl:pt-0">
            <p className={title1}>{props.c_title1}</p>
            <p className={title2}>{props.c_title2}</p>
            <p className={body1}>{props.c_body1}</p>
            <p className={body2}>{props.c_body2}</p>
          </div>
          <div className="w-full text-left md:text-center xl:text-left">
            <a href={url} target="blank">
              <button className="px-24 pt-12 pb-[15px] ml-24 font-bold text-white bg-black rounded-full md:ml-0 text-sm3 md:pb-20 md:pt-16 md:px-40 md:text-md2 font-Jakarta hover:text-secondary">
                {props.c_buttonName}
              </button>
            </a>
          </div>
        </div>
      </div>
      <video autoPlay className="hidden xl:block nt-video z-[-2]" loop muted>
        <source src={vurl}></source>
      </video>
      <div className={poster}></div>
    </section>
  );
};

export default VideoSlider;
