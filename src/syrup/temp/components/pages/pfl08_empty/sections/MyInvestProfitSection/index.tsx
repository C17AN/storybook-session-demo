import React from 'react';
import style from '../../pfl08_empty.module.scss';
import Text from '@components/common/Text';
import RoundedButton from '@components/common/Button/RoundedButton';

function MyInvestProfitSection() {
  return (
    <section className={style['section-3']}>
      <div className={style['section-3__title-container']}>
        <Text typography="t700" as="h2">
          내 투자 수익률은?
        </Text>
      </div>
      <div className={style['noti-content-box']}>
        <img src="/static/syrup_ico_50_info_noti_gray750.png" alt="강조 아이콘" width={50} height={50} />
        <Text as="p" typography="b200">
          모으기 탭에서 포인트를 모으고
          <br />
          포인트로 부담없이 투자를 시작해 보세요!
        </Text>
      </div>
      <div className={style['button-container']}>
        <RoundedButton type="gray">
          <Text typography="b300" as="span">
            불리기
          </Text>
        </RoundedButton>
        <RoundedButton type="primary">
          <Text typography="b300" as="span">
            포인트 모으기
          </Text>
        </RoundedButton>
      </div>
    </section>
  );
}

export default MyInvestProfitSection;
