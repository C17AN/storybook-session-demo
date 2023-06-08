import React from 'react';
import style from './PointGrowthItem.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import Text from '@components/common/Text';

type Props = {};

function PointGrowthItem(props: Props) {
  return (
    <div className={classNames(style.container)}>
      <img className={style['content-image']} src="/static/img_bulligi_tip.png" alt="포인트 불리기 팁 이미지" />
      <div className={style['link-container']}>
        <Link href="/">
          <Text typography="t1100" as="span" color="#464646">
            e금·은 시세보기
          </Text>
        </Link>
      </div>
    </div>
  );
}

export default PointGrowthItem;
