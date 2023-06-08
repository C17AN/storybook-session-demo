import MowebHeader from '@components/header/moweb-header';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from './atoms/Footer';
import PointInvestSection from './sections/PointInvestSection';
import MyInvestProfitSection from './sections/MyInvestProfitSection';
import InvestmentSection from './sections/InvestmentSection';
import LuxuryItemSection from './sections/LuxuryItemSection';
import InvestVirtualAssetSection from './sections/InvestVirtualAssetSection';
import RealTimeHotItemSection from './sections/RealTimeHotItemSection';
import ThreeMonthBeforeSection from './sections/ThreeMonthBeforeSection';
import PointGrowthSection from './sections/PointGrowthSection';

function Pfl08Page() {
  const sid = 'pfl08'; //QA Appmon 코드 체계화용 화면 번호 (링크, 버튼에 붙임)

  return (
    <>
      <MowebHeader headerText="불리기" ocbPoint="1000" sid={sid} />
      {/* 1. 포인트로 투자하기 섹션 */}
      <PointInvestSection />
      <img src="/static/KakaoTalk_Image_2022-04-28-16-32-36 1.png" alt="광고 영역 이미지" />
      {/* 2. 수익내고 시작하는 투자 섹션 */}
      <InvestmentSection />
      {/* 3. 내 투자 수익률은? 섹션 */}
      <MyInvestProfitSection />
      {/* 4. 명품 조각모집 공모중 섹션 */}
      <LuxuryItemSection />
      {/* 5. 실시간 주식 거래량 급상승 섹션 */}
      <RealTimeHotItemSection />
      {/* 6. 3개월 전에 금 투자 했다면 + 투자할 명품 조각 둘러보기 섹션 */}
      <ThreeMonthBeforeSection />
      {/* 7. 포인트 불리는 팁 섹션 */}
      <PointGrowthSection />
      {/* 푸터 영역 */}
      <Footer />
    </>
  );
}

export default Pfl08Page;
