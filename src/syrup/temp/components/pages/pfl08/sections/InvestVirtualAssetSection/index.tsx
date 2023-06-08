import React from 'react';
import style from '../../pfl08.module.scss';
import RadioButton from '@components/common/Button/RadioButton';
import ListRow from '@components/common/ListRow';
import ChangeRate from '@components/common/ChangeRate';
import Link from 'next/link';
import Spacing from '@components/common/Spacing';

function InvestVirtualAssetSection() {
  return (
    <section className={style['section-4']}>
      <div className={style['section-4__title-container']}>
        <h2 className={style['section-4__title']}>투자할 가상자산 살펴보기</h2>
        <h6 className={style['section-subtitle']}>1분 지연 시세</h6>
      </div>
      <ul className={style['radio-button-container']}>
        <RadioButton name={'정렬옵션'} value={'급상승'}>
          급상승
        </RadioButton>
        <RadioButton name={'정렬옵션'} value={'급하락'}>
          급하락
        </RadioButton>
        <RadioButton name={'정렬옵션'} value={'거래대금 많은 순'}>
          거래대금 많은 순
        </RadioButton>
      </ul>
      <ul>
        <ListRow
          name="비트코인"
          icon="/static/BTC.png"
          content="29,078,000원"
          leftBottomAccessary="BTC/KRW"
          rightBottomAccessary={<ChangeRate percentageValue={'5.23'} showPercentageOnly />}
        />
        <ListRow
          name="도지코인"
          icon="/static/ecoprodoge.png"
          content="2,007,000원"
          leftBottomAccessary="ETH/KRW"
          rightBottomAccessary={<ChangeRate percentageValue={'-2.12'} showPercentageOnly />}
        />
        <ListRow
          name="리플"
          icon="/static/ripple.png"
          content="490.7원"
          leftBottomAccessary="XRP/KRW"
          rightBottomAccessary={<ChangeRate percentageValue={'-2.12'} showPercentageOnly />}
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

export default InvestVirtualAssetSection;
