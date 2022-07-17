import React from "react";
import SliderSection04 from "../components/SliderSection04";
import { motion } from "framer-motion";

const Section04 = () => {
  // Famer Motion 정의
  const lineUpToBottom = {
    offscreen: {
      height: 0,
      opacity: 0,
    },
    onscreen: {
      height: 1200,
      opacity: 100,
    },
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-128">
        <div className="flex flex-col overflow-hidden">
          <div className="relative">
            <div className="w-300 xl:w-[400px] mx-auto mb-48 xl:mb-0">
              <div className="absolute left-0 right-0 z-20 mx-auto w-300 xl:w-[400px]">
                <img src="../img/device0.png" alt="" />
              </div>
              <div className="z-10">
                <SliderSection04 />
              </div>
            </div>
            <div className="absolute overflow-hidden md:top-0 md:left-0">
              <p className="absolute text-md md:text-xl xl:text-9xl font-black text-center text-[#1a1a1a] w-100% hover:text-secondary font-Oswald uppercase ">
                NOT YOUR FAULT
              </p>
              <p className="text-md md:text-xl font-regular text-[#1a1a1a] w-100% hover:text-secondary linear-wipe-2">
                In Asia, there is a great demand on the global media enterprises
                such as CJ E&M and Tencent includinglarge in-house agencies like
                Dentsu, Hakuhodo and Cheil. They consume a massive music sources
                to digital media, retail, event, exhibition, PR, outdoor and
                sports marketing as well as broadcasting and printing media. We
                exerted our best efforts to the localization for the large media
                clients to use the marketing solution.In Asia, there is a{" "}
                <span className="text-secondary">great</span> demand on the
                global media enterprises such as CJ E&M and Tencent
                includinglarge in-house agencies like Dentsu, Hakuhodo and
                Cheil. They consume a massive music sources to digital media,
                retail, event, exhibition, PR, outdoor and sports marketing as
                well as broadcasting and printing media. We exerted our best
                efforts to the localization for the large media clients to use
                the marketing solution.In Asia, there is a great demand on the
                global media enterprises such as CJ E&M and Tencent
                includinglarge in-house agencies like Dentsu, Hakuhodo and
                Cheil. They consume a{" "}
                <span className="!text-secondary">massive</span> music sources
                to digital media, retail, event, exhibition, PR, outdoor and
                sports marketing as well as broadcasting and printing media. We
                exerted our best efforts to the localization for the large media
                clients to use the marketing solution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute w-8 top-0 left-50% bg-secondary z-60 overflow-auto"
        variants={lineUpToBottom}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 1.5 }}
      ></motion.div>
    </section>
  );
};

export default Section04;
