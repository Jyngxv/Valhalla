import React from 'react';

const Footer = () => {
  return (
    <section className="bg-neutral-200">
      <div className="container px-24 py-32 md:px-48 xl:px-0 xl:py-96">
        <div className="flex flex-col">
          <div></div>
          <div>
            <p className="mb-16 text-sm font-bold xl:text-base">(주)지앤원</p>
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-600">사업자 등록번호 : 120-81-81371</span>
            <span className="leading-tight xl:leading-loose text-xs1 xl:text-sm font-regular text-neutral-600">대표 : 왕지원</span>
            <br />
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sme font-regular text-neutral-600">통신판매업 신고번호 : 39393838383</span>
            <span className="leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-600">
              서울시특별시 영등포구 당산로41길 11 SK V1 Center 1606, 1607
            </span>
            <br />
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-600">고객센터 : 1533-3299</span>
            <span className="leading-loose text-xs1 xl:text-sm font-regular text-neutral-600">입점 및 제휴 문의 : pood@pood.pet</span>
            <br />
            <span className="mr-16 leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-600">개인정보처리방침</span>
            <span className="leading-tight text-xs1 xl:leading-loose xl:text-sm font-regular text-neutral-600">서비스 이용약관</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
