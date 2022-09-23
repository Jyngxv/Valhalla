import React from 'react';

const Footer = () => {
  return (
    <section className="bg-[#101010]">
      <div className="container px-24 py-32 md:py-64 md:px-48 lg:px-64 xl:px-0 xl:py-96">
        <div className="flex flex-col">
          <div></div>
          <div>
            <p className="mb-16 text-sm font-bold text-white xl:text-base">(주)지앤원</p>
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-300">사업자 등록번호 : 120-81-81371</span>
            <span className="leading-tight xl:leading-loose text-xs1 xl:text-sm font-regular text-neutral-300">CEO : Jiwon Wang</span>
            <br />
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sme font-regular text-neutral-300">
              통신판매업 신고번호 : 2018-서울영등포-0984
            </span>
            <span className="leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-300">
              서울시특별시 영등포구 당산로41길 11 SK V1 Center 1606, 1607
            </span>
            <br />
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-300">CS : 1533-3299</span>
            <span className="leading-loose text-xs1 xl:text-sm font-regular text-neutral-300">Contact : pood@pood.pet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
