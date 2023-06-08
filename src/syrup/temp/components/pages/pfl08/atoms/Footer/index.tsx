import React from 'react';
import style from './Footer.module.scss';
import Text from '@components/common/Text';
import Spacing from '@components/common/Spacing';

type Props = {};

function Footer(props: Props) {
  return (
    <footer className={style.container}>
      <Text typography="t800" as="h2" className={style['footer-title']}>
        알려드려요!
      </Text>
      <ul className={style['footer-content']}>
        <Text typography="b500" as="li" color="#777777">
          본 서비스의 '내가 보유한 상품의 수익률은 얼마?'에서는 내가 보유한 조각자산의 평가금액 및 수익률을 확인할 수
          있습니다.
        </Text>
        <Spacing size={6} />
        <div>
          <Text typography="b500" as="p" color="#777777">
            - 금(new)은 조각거래 플랫폼 (주)트레져러에서 KRX금 현물 거래소를 통해 매입한 금을 제공받을 수 있는 모바일
            상품권으로, 국제 시세 (metalpriceapi.com) 에 따라 평가금액이 계산되며, 구매/판매시 지정된 평가금액으로 즉시
            거래가 체결됩니다. 실물 금은 KRX금 현물 거래소에서 보관되며, 트레져러앱에서 인출 신청해 실물 금으로 인출
            가능합니다. (수수료 별도)
          </Text>
          <Spacing size={6} />
          <Text typography="b500" as="p" color="#777777">
            - 명품 조각은 하나의 고가의 상품을 조각으로 분할한 소유권을 보유하는 것으로, 명품 조각거래 플랫폼
            (주)트레져러에서 제공하는 조각 시세로 평가금액이 계산됩니다.
            <br />
            트레져러 조각 모집(오픈런)이나 조각 거래를 통해 직접 구매한 상품과 야금 리워드를 통해 지급받은 조각 내역을
            모두 확인할 수 있습니다.
          </Text>
          <Spacing size={6} />
          <Text typography="b500" as="p" color="#777777">
            - 가상자산은 코빗에서 제공하는 원화마켓 시세로 평가금액이 계산됩니다. 코빗에서 보유하고 있는 코빗 원화 및
            가상자산 내역을 모두 확인할 수 있습니다.
          </Text>
        </div>
        <Spacing size={20} />
        <Text typography="b500" as="li" color="#777777">
          문의처
        </Text>
        <div>
          <Text typography="b500" as="p" color="#777777">
            - 금, 명품 조각 시세, 명품 조각 주문 : 트레져러 조각구매 화면 하단 카카오톡 1:1 문의 또는 전화/이메일 문의처
            참조, 또는 트레져러 앱 내 고객센터
          </Text>
          <Spacing size={6} />
          <Text typography="b500" as="p" color="#777777">
            - 가상 자산 시세, 가상 자산 주문 : 코빗 앱 고객센터
          </Text>
          <Spacing size={6} />
          <Text typography="b500" as="p" color="#777777">
            - 금/은 시세, 포인트를 통한 금/은 매수/매도 교환 내용 : 센골드 앱 내 문의하기
          </Text>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
