import React, { HTMLAttributes } from 'react';
import style from './PointVendorCard.module.scss';
import Link from 'next/link';

export interface PointVendorCardProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
  value: string;
  href?: string;
  color?: string;
  hasToolTip?: boolean;
  toolTipIconName?: string;
}

function PointVendorCard({
  name,
  href,
  value,
  hasToolTip,
  toolTipIconName,
  color = '#222',
  ...rest
}: PointVendorCardProps) {
  return (
    <li {...rest} className={style.container}>
      <div className={style['name-container']}>
        <p style={{ color }} className={style['card-name']}>
          {name}
        </p>
        {hasToolTip && (
          <img
            className={style['card-tooltip']}
            src={`/static/${toolTipIconName}`}
            alt="상세설명"
            width={13}
            height={13}
          />
        )}
        <img className={style['refresh-button__icon']} src="/static/update_ic.png" alt="새로고침" />
      </div>
      <Link href={href ?? ''}>
        <div className={style['card-value']}>
          <p>{value}</p>
          <img className={style['link-arrow']} src="/static/arrow_right.png" alt="이동하기" />
        </div>
      </Link>
    </li>
  );
}

export default PointVendorCard;
