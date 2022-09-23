import React from 'react';
import TitleHeadline from '../components/TitleHeadline';
import Review from '../components/Review';

const Section13 = () => {
  return (
    <section className="bg-white pt-128 pb-96 md:py-160 xl:py-192">
      <div className="container px-24 md:px-48 lg:px-64 xl:px-0 xl:py-0">
        <div className="mb-24 md:mb-96 xl:mb-64">
          <TitleHeadline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-500"
            c_headline1="Trusted by petfams"
            c_headline2="Store score 4.9"
            textalign="text-center"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:mx-12 lg:basis-1/3">
            <Review
              store="apple"
              reviewer="고**"
              date="6 MAY"
              title="반려동물을 키운다면 강추 어플"
              content="오늘만 할인이라는 탭에서 할인제품도 살 수 있고 무엇보다 이벤트가 다양해서 좋아요~~! 매달 새로운 주제로 포토 어워즈가 열리는데 우리집 고양이 자랑할 겸 주제에 맞는 사진을 올리는 재미가 있습니다ㅎㅎ 참여하면 포인트도 적립해줘요!!👍 그리고 맞춤 스토어가 있어서 모시는 주인님들 신상정보를 입력해두면 알아서 제품을 추천해주니까 너무 좋은 것 같아요~~! 앞으로도 꾸준히 이용할 것 같습니다♡"
            />
            <Review
              store="google"
              reviewer="k***"
              date="16 MAY"
              title=""
              content="기본에 충실한 깔끔하고 심플한 UI,UX라 상품에 집중하기 좋았고 간식 한개도 무료배송 되는 점이 좋았습니다. 특이하게 맛별로 제품을 따로 볼 수 있어서 시간도 절약되고 편하게 구매했습니다~"
            />
            <Review
              store="apple"
              reviewer="옹**"
              date="11 MAY"
              title="반려동물과 함께한다면 강추 어플 !"
              content="오늘만 할인이나 기획전, 이벤트 등 행사도 다양하고,맞춤 스토어에서 아이와 잘 맞는 상품도 쇼핑할 수 있어요. 잘 사용하고 있습니다 ~~"
            />
            <Review
              store="apple"
              reviewer="옹**"
              date="20 NOV"
              title="강아지 관리 앱은 처음인데"
              content="사료 성분이랑 자동 추천 시스템이 획기적인듯 합니다. 수의사와 상담도 지원된다니 여러모로 쓸모가 많을듯하네요."
            />
          </div>
          <div className="flex flex-col lg:mx-12 lg:basis-1/3">
            <Review
              store="google"
              reviewer="우**"
              date="7 MAY"
              title=""
              content="쿠폰이나 이벤트가 다른 곳에서 볼 수 없었던 참신한 것들이 많았어요. 쿠폰도 자주 주고 이벤트도 다양하게 자주 바뀌고요. 다양한 이벤트 참여하면서 쿠폰등등도 얻고 쏠쏠한 재미가 있네요ㅋㅋㅋ할인도 많이하고 기부같은 유익한 프로그램도 진행하는 것 같아요 칼럼뉴스 같은 것도 있는데 그것도 많은 도움이 되네요ㅎㅎ 잘쓰고 있습니다!"
            />
            <Review
              store="google"
              reviewer="M**"
              date="02 MAY"
              title=""
              content="무료배송인 점이 정말 좋습니다. 또 행사도 자주해서 저렴하게 여러 간식이나 사료를 구매할 수 있어서 만족합니다. 앱도 사용하기 편하고 오류도 없어요."
            />
            <Review
              store="apple"
              reviewer="쁨*"
              date="01 DEC"
              title="반려동물 최고의 앱"
              content="단순 쇼핑에서만 끝나는게 아니라 전문적으로 추천해주고 관리해주니 너무나 좋습니다. 디자인도 깔끔하고 굉장히 편리해요! 컨텐츠도 다양해서 매일 즐겁게 보고 있습니다"
            />
            <Review
              store="google"
              reviewer="유**"
              date="03 MAY"
              title=""
              content="어플 디자인이 아주 직관적이라 맘에 쏙 들구요 이벤트도 자주 하시고 기부도 하고 좋은 어플 같아요 배송도 항상 다음날이면 오구요 요기 덕에 강아지들 간식 배부르게 먹고 있네요 간식 질도 훌륭하구요 잘 이용하고 잇습니다 감사합니다"
            />
          </div>
          <div className="flex flex-col lg:mx-12 lg:basis-1/3">
            <Review store="google" reviewer="C**" date="21 NOV" title="" content="설명도 잘해주시고 앱도 다른곳과 다르게 상세해서 좋았습니다." />
            <Review
              store="apple"
              reviewer="양**"
              date="23 NOV"
              title=""
              content="맞춤 급여량이랑 아이 맞춤 사료 추천해주는 것도 좋은데, 추후 수명 관리 체중 관리 기능도 우리 아이한테 딱 필요한 기능인 것 같아서 기대중입니다"
            />
            <Review
              store="apple"
              reviewer="피****"
              date="05 MAY"
              title="반려인 필수 어플 푸드앱"
              content="쇼핑은 기본, 다양한 이벤트, 맞춤사료 추천, 수의사 상담까지.. 반려인이라면 꼭 깔아야하는 어플입니다! 푸드"
            />
            <Review
              store="google"
              reviewer="빵*"
              date="14 MAY"
              title=""
              content="잘 사용하고 있습니다. 하나만 구매해도 무료배송이고 웨루바 수입사인만큼 웨루바 할인이 종종 있어서 매일매일 들어가서 한번씩 둘러봅니다. 다만 상품군이 좀 더 다양해졌으면 하는 바램이 있습니다."
            />
            <Review
              store="google"
              reviewer="H***"
              date="26 JAN"
              title=""
              content="맞춤 사료와 솔루션 부분이 마음에들고 여러아이들을 모두등록할수있는게 좋아요 :)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
