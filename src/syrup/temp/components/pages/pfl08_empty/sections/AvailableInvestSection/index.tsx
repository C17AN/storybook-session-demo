import React from 'react';
import style from '../../pfl08_empty.module.scss';
import Text from '@components/common/Text';
import EmptyPointVendorCard from '../../atom/EmptyPointVendorCard';

type Props = {};

function AvailableInvestSection(props: Props) {
  return (
    <section className={style['section-1']}>
      <Text typography="t700" as="h2">
        포인트로 투자하기
      </Text>
      <ul className={style['investment-card-list']}>
        <li>
          <EmptyPointVendorCard name="OK캐쉬백" value={''} />
          <EmptyPointVendorCard name="삼성증권" value={''} />
          <EmptyPointVendorCard name="코빗" value={''} />
          <EmptyPointVendorCard name="트레져러" value={''} />
        </li>
      </ul>
    </section>
  );
}

export default AvailableInvestSection;
