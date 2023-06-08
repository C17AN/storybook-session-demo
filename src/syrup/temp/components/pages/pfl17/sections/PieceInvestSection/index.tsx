import React from 'react';
import style from '../../pfl17.module.scss';
import Text from '@components/common/Text';
import Link from 'next/link';
import Spacing from '@components/common/Spacing';
import ChangeRate from '@components/common/ChangeRate';
import RefreshButton from '@components/common/RefreshButton';
import ListRow from '@components/common/ListRow';
import TradingStatusText from '../../atoms/TradingStatusText';
import LinkButton from '../../atoms/LinkButton';

type Props = {};

function PieceInvestSection(props: Props) {
  return (
    <>
      <section className={style['section-4']}>
        <div className={style['section-4-content']}>
          <div className={style['treasurer-title']}>
            <Text typography="b400" as="h4" color="#464646">
              트레져러(명품·금)
            </Text>
          </div>
          <div className={style['treasurer-pricing-container']}>
            <Text typography="t200">300,109원</Text>
            <Link href="/">
              <div className={style['treasurer-trading-log']}>
                <span>거래내역</span>
                <img src="/static/syrup_ico_18_arrow_right_gray400.png" alt="거래내역 바로가기" />
              </div>
            </Link>
          </div>
          <Spacing size={6} />
          <div className={style['treasurer-rating-container']}>
            <ChangeRate value={'50,142'} percentageValue={'4.6'} />
            <RefreshButton>12시간 전</RefreshButton>
          </div>
          <Spacing size={14} />
        </div>
        <ul>
          <ListRow
            icon="/static/gold.png"
            name="금"
            content="1,209원"
            leftBottomAccessary="0.0291g"
            rightBottomAccessary={<ChangeRate value={'50,142'} percentageValue={'4.6'} />}
            isNewItem
          />
          <ListRow
            icon="/static/blank.png"
            name="Rolex 서브마리너 블루 다이얼로그"
            content="70,221원"
            leftBottomAccessary="52조각"
            rightBottomAccessary={<TradingStatusText tradingStatus="투표중">조각 거래 중단</TradingStatusText>}
            bottomAccessary={
              <LinkButton href="/" type="primary" subContent="투표하기">
                매각 수익률 확인하고 투표에 참여하세요!
              </LinkButton>
            }
          />
          <ListRow
            icon="/static/blank.png"
            name="Rolex 서브마리너 블루 다이얼로그"
            content="70,221원"
            leftBottomAccessary="52조각"
            rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
            bottomAccessary={
              <LinkButton href="/" type="gray">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    className={style['link-button-icon']}
                    src="/static/syrup_img_14_speakeremoji.svg"
                    width={14}
                    height={14}
                  />
                  <span>오늘 오후 6시에 투표 결과가 발표돼요!</span>
                </div>
              </LinkButton>
            }
          />
          <ListRow
            icon="/static/blank.png"
            name="Rolex 서브마리너 블루 다이얼로그"
            content="70,221원"
            leftBottomAccessary="52조각"
            rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
          />
          <ListRow
            icon="/static/blank.png"
            name="Rolex 서브마리너 블루 다이얼로그"
            content="70,221원"
            leftBottomAccessary="52조각"
            rightBottomAccessary={<ChangeRate value={'39'} percentageValue={'-1.3'} />}
            hideBorderBottom
          />
        </ul>
      </section>
      <Spacing size={50} />
    </>
  );
}

export default PieceInvestSection;
