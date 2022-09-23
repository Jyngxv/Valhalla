import React from 'react';
import TitleHeadline from '../components/TitleHeadline';

const Section05 = () => {
  return (
    <section className="relative py-64 overflow-hidden bg-white md:py-128 lg:py-160 md:block xl:py-128" initial="offscreen" whileInView="onscreen">
      <div className="container px-24 md:px-48">
        <div className="md:px-48 md:py-48 xl:px-96 xl:py-96 md:bg-[#f7f7f7] md:rounded-24 xl:rounded-48">
          <TitleHeadline
            textalign="text-left"
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="Based on"
            c_headline2="Veterinary science"
          />
          <div className="pt-0 md:pt-24">
            <p className="text-base text-[#222222] md:text-md2 font-Jakarta">
              Pood algorithm is based on the most scientific method. It was designed based on research data and papers from international organizations such as
              NRC, AAFCO, and FEDIAF, fundamental to veterinary medicine. It analyzes based on basic information such as body weight, breed, neutering, and age
              of pets. It combines them with information on preferences, allergies, and owners' concerns to understand pets in a complex way. Less than 5
              seconds takes to analyze hundreds of thousands of data due to our own technological advances. In addition, Pood algorithm is conducting joint
              research with Seoul National University's College of Veterinary Medicine, so it contains science beyond simple technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
