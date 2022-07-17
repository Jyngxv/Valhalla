import React from "react";
import TitleHeadline from "../components/TitleHeadline";
import { motion } from "framer-motion";

const Section03 = () => {
  return (
    <section className="bg-black">
      <div className="container px-24 py-128 md:px-48 md:py-160 xl:px-0 xl:py-256">
        <div className="flex flex-col lg:flex-row md:mb-0 xl:mb-128">
          <div className="mb-64 md:mb-120 basis-1/2">
            <div className="flex flex-col">
              <div>
                <TitleHeadline
                  textcolor1="text-white"
                  textcolor2="text-secondary"
                  textcolor3="text-neutral-500"
                  c_headline1="언젠가 꿈꿔왔던"
                  c_headline2="기술이 여기에"
                  c_body1="We connects the artists who want to promote the music and expect revenue creation from it and the creators who want to accurately explore and coveniently use high-quality music."
                />
              </div>
              <div className="md:block xl:block">
                <div className="py-24">
                  <ul>
                    <li>
                      <img
                        className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                        src="img/logo-snu.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                        src="img/logo-aafco.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                        src="img/logo-fediaf.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="mr-32 opacity-50 h-36 md:h-64 xl:h-64 hover:opacity-100"
                        src="img/logo-nrc.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2">
            <div className="mx-auto lg:ml-auto lg:mr-0 w-240 md:w-400 xl:w-480">
              <motion.video
                autoPlay
                loop
                playsInline
                muted
                whileHover={{ scale: 1.1 }}
              >
                <source src="video/crystalblack.mp4" type="video/mp4"></source>
              </motion.video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
