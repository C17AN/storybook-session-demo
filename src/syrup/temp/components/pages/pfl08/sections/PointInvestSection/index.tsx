import React from 'react';
import style from '../../pfl08.module.scss';
import CTAButton from '@components/common/Button/CTAButton';
import PointVendorCard from '../../atoms/PointVendorCard';
import BannerSwiper from './BannerSwiper';

function PointInvestSection() {
  return (
    <section className={style['section-1']}>
      <BannerSwiper />
      <h2 className={style.syrup_typo_t7}>포인트로 투자하기</h2>
      <ul className={style['investment-card-list']}>
        <PointVendorCard name="OK캐쉬백" value="12,400P" color="#FA1852" />
        <PointVendorCard name="삼성증권 예수금" value="32,000,000원" color="#1428A0" />
        <PointVendorCard
          name="코빗 원화"
          value="32,000,000원"
          color="#9B05E2"
          hasToolTip
          toolTipIconName="info_korbit.png"
        />
        <PointVendorCard
          name="트레져러 예치금"
          value="32,000,000원"
          color="#222222"
          hasToolTip
          toolTipIconName="info_tresearer.png"
        />
      </ul>
      <CTAButton id="growth-button" onClick={() => {}}>
        불리기
      </CTAButton>
    </section>
  );
}

export default PointInvestSection;
