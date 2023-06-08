import React from 'react';
import style from '../../pfl08.module.scss';
import ChangeRate from '@components/common/ChangeRate';
import RefreshButton from '@components/common/RefreshButton';
import Link from 'next/link';
import Spacing from '@components/common/Spacing';
import ListRow from '@components/common/ListRow';
import classNames from 'classnames';

function MyInvestProfitSection() {
  return (
    <section className={classNames(style['section-2'])}>
      <div className={classNames(style['section-2__title-container'])}>
        <h2 className={classNames(style['section-2__title'])}>내 투자 수익률은?</h2>
        <h6 className={classNames(style['total-pricing-text'])}>총 보유 상품 금액</h6>
        <div className={classNames(style['total-pricing-container'])}>
          <div className={classNames(style['total-pricing'])}>820,100원</div>
          <img src="/static/arrow_right_gray200.png" alt="총 보유 상품 금액 확인하기" width={24} height={24} />
        </div>
        <div className={classNames(style['utils-container'])}>
          <ChangeRate value={'40,379'} percentageValue={'7.55'} />
          <RefreshButton id="refresh-button">12시간 전</RefreshButton>
        </div>
      </div>
      <ul>
        <ListRow
          name="에코프로"
          icon="/static/ecopro.png"
          content="523,000원"
          leftBottomAccessary="10주"
          rightBottomAccessary={<ChangeRate value={'24,132'} percentageValue={'-4.23'} />}
        />
        <ListRow
          name="SK스퀘어"
          icon="/static/sksquare.png"
          content="386,500원"
          leftBottomAccessary="10주"
          rightBottomAccessary={<ChangeRate value={'0'} percentageValue={'0'} />}
        />
        <ListRow
          name="SK하이닉스"
          icon="/static/skhynix.png"
          content="83,300원"
          leftBottomAccessary="10주"
          rightBottomAccessary={<ChangeRate value={'932'} percentageValue={'1.23'} />}
        />
        <ListRow
          name="비트코인"
          icon="/static/BTC.png"
          content="157,003원"
          leftBottomAccessary="0.3343155 BTC"
          rightBottomAccessary={<ChangeRate value={'54,132'} percentageValue={'14.6'} />}
        />
        <ListRow
          name="도지코인"
          icon="/static/ecoprodoge.png"
          content="12,214원"
          leftBottomAccessary="20.334555 DOGE"
          rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
        />
        <ListRow
          name="톤"
          icon="/static/ton.png"
          content="10,214원"
          leftBottomAccessary="1.3334555 TON"
          rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
        />
        <ListRow
          name="금"
          icon="/static/gold.png"
          content="1,209원"
          leftBottomAccessary="0.0291g"
          rightBottomAccessary={<ChangeRate value={'1,209'} percentageValue={'-1.3'} />}
        />
        <ListRow
          name="Rolex 데이토나 오이스터플렉"
          icon="/static/blank.png"
          content="2,209원"
          leftBottomAccessary="2조각"
          rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
        />
        <ListRow
          name="Rolex 데이토나 오이스터플렉"
          icon="/static/blank.png"
          content="2,209원"
          leftBottomAccessary="2조각"
          rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
        />
        <ListRow
          name="Rolex 데이토나 오이스터플렉"
          icon="/static/blank.png"
          content="2,209원"
          leftBottomAccessary="2조각"
          rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
        />
      </ul>
      <Link href="/" className={style['show-all-link']}>
        <span>전체보기</span>
        <img src="/static/arrow_right.png" width={18} height={18} alt="전체보기" />
      </Link>
      <Spacing size={10} backgroundColor="#F6F6F7" />
    </section>
  );
}

export default MyInvestProfitSection;
