import React from 'react';
import style from '../../pfl17.module.scss';
import Text from '@components/common/Text';
import Link from 'next/link';
import Spacing from '@components/common/Spacing';
import ChangeRate from '@components/common/ChangeRate';
import RefreshButton from '@components/common/RefreshButton';
import ListRow from '@components/common/ListRow';

type Props = {};

function VirtualInvestSection(props: Props) {
  return (
    <section className={style['section-3']}>
      <div className={style['section-3-content']}>
        <div className={style['korbit-title']}>
          <Text typography="b400" as="h4" color="#464646">
            코빗 (가상자산)
          </Text>
        </div>
        <div className={style['korbit-pricing-container']}>
          <Text typography="t200">200,109원</Text>
          <Link href="/">
            <div className={style['korbit-trading-log']}>
              <span>거래내역</span>
              <img src="/static/syrup_ico_18_arrow_right_gray400.png" alt="거래내역 바로가기" />
            </div>
          </Link>
        </div>
        <Spacing size={6} />
        <div className={style['korbit-rating-container']}>
          <ChangeRate value={'50,142'} percentageValue={'4.6'} />
          <RefreshButton>12시간 전</RefreshButton>
        </div>
        <Spacing size={14} />
      </div>
      <ul>
        <ListRow
          icon="/static/BTC.png"
          name="비트코인"
          content="29,078,000원"
          leftBottomAccessary="BTC/KRW"
          rightBottomAccessary={<ChangeRate percentageValue={'5.23'} showPercentageOnly />}
        />
        <ListRow
          icon="/static/ecoprodoge.png"
          name="도지코인"
          content="2,007,000원"
          leftBottomAccessary="ETH/KRW"
          rightBottomAccessary={<ChangeRate percentageValue={'-2.12'} showPercentageOnly />}
        />
        <ListRow
          icon="/static/ripple.png"
          name="리플"
          content="490.7원"
          leftBottomAccessary="XRP/KRW"
          rightBottomAccessary={<ChangeRate percentageValue={'-2.12'} showPercentageOnly />}
          hideBorderBottom
        />
      </ul>
    </section>
  );
}

export default VirtualInvestSection;
