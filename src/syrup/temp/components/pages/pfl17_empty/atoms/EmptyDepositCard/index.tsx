import React, { HTMLAttributes } from 'react';
import style from './EmptyDepositCard.module.scss';
import Text from '@components/common/Text';
import classNames from 'classnames';

export interface EmptyDepositCardProps extends HTMLAttributes<HTMLDivElement> {
  serviceName: string;
  description?: string;
  color?: string;
}

function EmptyDepositCard({ serviceName, description, color, ...rest }: EmptyDepositCardProps) {
  return (
    <div className={classNames(style.container, rest.className)}>
      <img src="/static/syrup_ico_24_add_btn.png" alt="추가하기" className={style['add-icon']} />
      <div className={style['title-container']}>
        <Text typography="t1000" as="h3" color="#777">
          {serviceName}
        </Text>
      </div>
      <Text typography="b500" color={color}>
        {description}
      </Text>
    </div>
  );
}

export default EmptyDepositCard;
