import React from 'react';
import style from '../../pfl08.module.scss';
import InvestEventCard from '../../atoms/InvestEventCard';
import Chip from '@components/common/Chip';
import classNames from 'classnames';

function InvestmentSection() {
  return (
    <section className={classNames(style['section-2'])}>
      <div className={classNames(style['section-2__title-container'])}>
        <h2 className={classNames(style['section__title'])}>수익내고 시작하는 투자</h2>
      </div>
      <div className={classNames(style['invest-event-container'])}>
        <InvestEventCard
          icon="/static/img_68_invest_samsung_logo.png"
          topAccesary={
            <Chip backgroundColor="#fff" color="#555555">
              1% 재적립
            </Chip>
          }
          backgroundColor="#F1F6FF"
          title="삼성증권 예수금 채우기"
          titleColor="#0043C3"
          content="삼성증권 주식 및 펀드 투자"
        />
      </div>
    </section>
  );
}

export default InvestmentSection;
