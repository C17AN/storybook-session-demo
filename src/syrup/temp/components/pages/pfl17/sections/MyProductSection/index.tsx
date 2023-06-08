import React from 'react';
import style from '../../pfl17.module.scss';
import Text from '@components/common/Text';
import Spacing from '@components/common/Spacing';
import ChangeRate from '@components/common/ChangeRate';
import Border from '@components/common/Border';
import Link from 'next/link';
import RefreshButton from '@components/common/RefreshButton';
import ListRow from '@components/common/ListRow';

type Props = {};

function MyProductSection(props: Props) {
  return (
    <section className={style['section-2']}>
      <div className={style['section-2-content']}>
        <Text typography="t700" as="h2" color="#222222">
          내 보유 상품
        </Text>
        <Spacing size={24} />
        <Text typography="b400" as="h2" color="#666666">
          총 보유 상품 금액
        </Text>
        <Spacing size={6} />
        <Text typography="t200">820,100원</Text>
        <Spacing size={4} />
        <ChangeRate value={'40,279'} percentageValue={'7.55'} />
        <Spacing size={30} />
        <Border color="#EDEDED" size={1} />
        <Spacing size={32} />
        <div className={style['samsung-security-title']}>
          <Text typography="b400" as="h4" color="#464646">
            삼성증권
          </Text>
          <img src="/static/ic_12_info_gray500.png" alt="정보" />
        </div>
        <div className={style['samsung-security-pricing-container']}>
          <Text typography="t200">3,524,056원</Text>
          <Link href="/">
            <div className={style['samsung-security-trading-log']}>
              <span>거래내역</span>
              <img src="/static/syrup_ico_18_arrow_right_gray400.png" alt="거래내역 바로가기" />
            </div>
          </Link>
        </div>
        <Spacing size={6} />
        <div className={style['samsung-security-rating-container']}>
          <ChangeRate value={'-394,380'} percentageValue={'-11.9'} />
          <RefreshButton>12시간 전</RefreshButton>
        </div>
        <Spacing size={14} />
      </div>
      <ul>
        <ListRow
          icon="/static/ecopro.png"
          name="에코프로"
          content="523,000원"
          leftBottomAccessary="1주"
          rightBottomAccessary={<ChangeRate value={'24,132'} percentageValue={'-4.23'} />}
        />
        <ListRow
          icon="/static/ecopro.png"
          name="에코프로"
          content="523,000원"
          leftBottomAccessary="1주"
          rightBottomAccessary={<ChangeRate value={'24,132'} percentageValue={'-4.23'} />}
        />
        <ListRow
          icon="/static/sksquare.png"
          name="SK스퀘어"
          content="386,500원"
          leftBottomAccessary="10주"
          rightBottomAccessary={<ChangeRate value={'54,132'} percentageValue={'14.6'} />}
        />
        <ListRow
          icon="/static/skhynix.png"
          name="SK하이닉스"
          content="83,300원"
          leftBottomAccessary="10주"
          rightBottomAccessary={<ChangeRate value={'932'} percentageValue={'1.23'} />}
        />
        <ListRow
          icon="/static/skhynix.png"
          name="SK하이닉스"
          content="83,300원"
          leftBottomAccessary="10주"
          rightBottomAccessary={<ChangeRate value={'932'} percentageValue={'1.23'} />}
        />
      </ul>
      <Link href="/" className={style['show-all-link']}>
        <span>더보기</span>
        <img src="/static/arrow_right.png" width={18} height={18} alt="더보기" />
      </Link>
    </section>
  );
}

export default MyProductSection;
