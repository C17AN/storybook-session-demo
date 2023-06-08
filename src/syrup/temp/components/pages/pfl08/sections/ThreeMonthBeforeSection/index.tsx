import React from 'react';
import style from '../../pfl08.module.scss';
import RadioButton from '@components/common/Button/RadioButton';
import Spacing from '@components/common/Spacing';
import Link from 'next/link';
import ListRow from '@components/common/ListRow';
import ChangeRate from '@components/common/ChangeRate';
import RateToolTip from '../../atoms/RateToolTip';
import BarGraph from './BarGraph';

type Props = {};

function ThreeMonthBeforeSection(props: Props) {
  return (
    <section className={style['section-5']}>
      <div className={style['section-5__title-container']}>
        <h2 className={style['section-5__title']}>3개월 전에 금 투자 했다면?</h2>
      </div>
      <BarGraph />
      <div className={style['section-5__title-container']}>
        <h2 className={style['section-5__title']}>투자할 명품 조각 둘러보기</h2>
      </div>
      <ul className={style['radio-button-container']}>
        <RadioButton name={'정렬옵션'} value={'Best'}>
          Best
        </RadioButton>
        <RadioButton name={'정렬옵션'} value={'AI추천'}>
          AI추천
        </RadioButton>
        <RadioButton name={'정렬옵션'} value={'안정적'}>
          안정적
        </RadioButton>
        <RadioButton name={'정렬옵션'} value={'조기매각'}>
          조기매각
        </RadioButton>
        <RadioButton name={'정렬옵션'} value={'보험상품 골라보기'}>
          보험상품 골라보기
        </RadioButton>
      </ul>
      <ul>
        <ListRow
          name="Rolex"
          icon="/static/blank.png"
          content="1,209원"
          leftBottomAccessary="스카이드웰러 블랙 다이얼 골드"
          rightBottomAccessary={<ChangeRate percentageValue={'1.8'} showPercentageOnly />}
          rightBottomToolTop={<RateToolTip percentageValue={'12.71'} trailingText=" 더 오를 수 있어요!" />}
        />
        <ListRow
          name="DRC"
          icon="/static/blank.png"
          content="1,520원"
          leftBottomAccessary="2016 DRC Rommanee-Conti Grand df"
          rightBottomAccessary={<ChangeRate percentageValue={'15.8'} showPercentageOnly />}
          rightBottomToolTop={<RateToolTip percentageValue={'-9.04'} trailingText=" 떨어질 수 있어요!" />}
        />
        <ListRow
          name="OMEGA"
          icon="/static/blank.png"
          content="942원"
          leftBottomAccessary="스피드마스터 ‘실버 스누피 어워드' 50주년"
          rightBottomAccessary={<ChangeRate percentageValue={'-2.5'} showPercentageOnly />}
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

export default ThreeMonthBeforeSection;
