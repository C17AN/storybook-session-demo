import React from 'react';
import style from '../../pfl17_empty.module.scss';
import Text from '@components/common/Text';
import EmptyDepositCard from '../../atoms/EmptyDepositCard';
import CTAButton from '@components/common/Button/CTAButton';

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
        <EmptyDepositCard
          className="empty-deposit-card"
          serviceName="OK캐쉬백"
          color="#FF799B"
          description="포인트로 야금야금 모으고 불리기"
        />
        <EmptyDepositCard
          className="empty-deposit-card"
          serviceName="삼성증권"
          color="#8A95D7"
          description="신규 통장 만들면 5천P+ 주식을 드려요!"
        />
        <EmptyDepositCard
          className="empty-deposit-card"
          serviceName="코빗"
          color="#7EAAFF"
          description="OK캐쉬백 포인트로 가상자산 투자하기"
        />
        <EmptyDepositCard
          className="empty-deposit-card"
          serviceName="트레져러"
          color="#81BDDC"
          description="신규 연결 시 명품 조각 100% 당첨"
        />
      </div>
      <div className={style['button-container']}>
        <CTAButton id="bulligi-button" disabled>
          불리기
        </CTAButton>
      </div>
      <ul className={style['info-container']}>
        <li>코빗 원화 인출은 코빗 앱에서 이용 가능합니다.</li>
        <li>트레져러 예치금 인출은 트레져러 앱에서 이용 가능합니다.</li>
      </ul>
    </section>
  );
}

export default AvailableInvestSection;
