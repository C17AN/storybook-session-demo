import React from 'react';
import style from '../../pfl17.module.scss';
import Text from '@components/common/Text';
import DepositCard from '../../atoms/DepositCard';
import CTAButton from '@components/common/Button/CTAButton';
import Spacing from '@components/common/Spacing';

type Props = {};

function AvailableInvestSection(props: Props) {
  return (
    <section>
      <div className={style['title-container']}>
        <Text typography="t700" as="h2">
          투자 가능 금액
        </Text>
      </div>
      <div className={style['deposit-card-container']}>
        <DepositCard
          payback1Percent
          className="deposit-card"
          serviceName="OK캐쉬백"
          color="#FA1852"
          depositAmount="99,999,999P"
        />
        <DepositCard
          payback1Percent
          className="deposit-card"
          serviceName="삼성증권 예수금"
          color="#0056D8"
          depositAmount="99,999,999P"
          onlySupportPointTransfer
        />
        <DepositCard
          payback1Percent
          className="deposit-card"
          serviceName="코빗 원화"
          color="#9B05E2"
          depositAmount="99,999,999P"
        />
        <DepositCard
          className="deposit-card"
          serviceName="트레져러 예치금"
          color="#222"
          depositAmount="99,999,999P"
          onlySupportCashTransfer
        />
      </div>
      <div className={style['button-container']}>
        <CTAButton>불리기</CTAButton>
      </div>
      <ul className={style['info-container']}>
        <li>삼성증권 예수금은 삼성증권 mPOP 앱에서 이용 가능합니다.</li>
        <li>코빗 원화 인출은 코빗 앱에서 이용 가능합니다.</li>
        <li>트레져러 예치금 인출은 트레져러 앱에서 이용 가능합니다.</li>
      </ul>
      <Spacing size={10} backgroundColor="#F6F6F7" />
    </section>
  );
}

export default AvailableInvestSection;
