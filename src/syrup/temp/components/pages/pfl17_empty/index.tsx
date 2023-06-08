import React from 'react';
import style from './pfl17_empty.module.scss';
import Spacing from '@components/common/Spacing';
import AvailableInvestSection from './sections/AvailableInvestSection';
import MyProductSection from './sections/MyProductSection';
import AppBar from '@components/common/AppBar';

function Pfl17EmptyPage() {
  const sid = 'pfl08_detail'; //QA Appmon 코드 체계화용 화면 번호 (링크, 버튼에 붙임)

  return (
    <div className={style.container}>
      <AppBar hasBackButton />
      {/* 투자 가능 금액 섹션 */}
      <AvailableInvestSection />
      <Spacing size={10} backgroundColor="#F6F6F7" />
      {/* 내 보유 상품 섹션 */}
      <MyProductSection />
    </div>
  );
}

export default Pfl17EmptyPage;
