import MowebHeader from '@components/header/moweb-header';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import AvailableInvestSection from './sections/AvailableInvestSection';
import InvestmentSection from './sections/InvestmentSection';
import MyInvestProfitSection from './sections/MyInvestProfitSection';

function Pfl08EmptyPage() {
  const sid = 'pfl08_empty'; //QA Appmon 코드 체계화용 화면 번호 (링크, 버튼에 붙임)

  return (
    <>
      <MowebHeader headerText="불리기" ocbPoint="1000" sid={sid} />
      {/* 1. 포인트로 투자하기 섹션 */}
      <AvailableInvestSection />
      <img src="/static/KakaoTalk_Image_2022-04-28-16-32-36 1.png" />
      {/* 2. 수익내고 시작하는 투자 섹션 */}
      <InvestmentSection />
      {/* 3. 내 투자 수익률은? 섹션 */}
      <MyInvestProfitSection />
    </>
  );
}

export default Pfl08EmptyPage;
