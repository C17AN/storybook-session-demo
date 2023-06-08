import React from 'react';
import style from './pfl17.module.scss';
import AvailableInvestSection from './sections/AvailableInvestSection';
import MyProductSection from './sections/MyProductSection';
import VirtualInvestSection from './sections/VirtualInvestSection';
import PieceInvestSection from './sections/PieceInvestSection';
import AppBar from '@components/common/AppBar';

function Pfl17Page() {
  const sid = 'pfl17'; //QA Appmon 코드 체계화용 화면 번호 (링크, 버튼에 붙임)

  return (
    <div className={style.container}>
      <AppBar hasBackButton />
      {/* 투자 가능 금액 섹션 */}
      <AvailableInvestSection />
      {/* 내 보유 상품 + 삼성증권 섹션 */}
      <MyProductSection />
      {/* 코빗 (가상자산) 섹션 */}
      <VirtualInvestSection />
      {/* 트레져서 (조각투자) 섹션 */}
      <PieceInvestSection />
    </div>
  );
}

export default Pfl17Page;
