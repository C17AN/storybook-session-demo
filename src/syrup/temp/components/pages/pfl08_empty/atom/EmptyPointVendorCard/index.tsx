import React, { HTMLAttributes } from 'react';
import style from './EmptyPointVendorCard.module.scss';
import Text from '@components/common/Text';

export interface PointVendorCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  value: string;
  href?: string;
  toolTipIconName?: string;
}

function EmptyPointVendorCard({ name, href, value, toolTipIconName, ...rest }: PointVendorCardProps) {
  return (
    <div className={style.container} {...rest}>
      <img className={style.icon} src="/static/syrup_ico_24_add_btn.png" alt={name} />
      <Text typography="t1050" className={style['name-container']} color="#777777">
        {name}
      </Text>
    </div>
  );
}

export default EmptyPointVendorCard;
