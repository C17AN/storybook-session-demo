import React from 'react';
import style from '../../pfl17_empty.module.scss';
import Text from '@components/common/Text';
import Spacing from '@components/common/Spacing';

type Props = {};

function MyProductSection(props: Props) {
  return (
    <section className={style['section-2']}>
      <Text typography="t700" as="h2" color="#222222">
        내 보유 상품
      </Text>
      <div className={style['section-2-content']}>
        <Spacing size={24} />
        <img className={style['alert-icon']} src="/static/syrup_ico_50_info_noti_gray750.png" alt="알림 아이콘" />
        <Text typography="b200" as="p" color="#464646">
          보유 중인 상품이 없어요.
          <br />
          포인트로 부담없이 투자를 시작해 보세요!
        </Text>
      </div>
    </section>
  );
}

export default MyProductSection;
