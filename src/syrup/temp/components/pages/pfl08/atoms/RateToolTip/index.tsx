import React, { ReactNode } from 'react';
import style from './RateToolTip.module.scss';
import ChangeRate from '@components/common/ChangeRate';

type Props = {
  percentageValue?: string | number;
  trailingText?: string;
};

function RateToolTip({ percentageValue, trailingText }: Props) {
  return (
    <div className={style.container}>
      <img src="../static/tooltip-triangle.png" className={style['tooltip-triangle']} width={10} height={7} />
      {percentageValue && <ChangeRate size="small" percentageValue={percentageValue} showPercentageOnly />}
      <span className={style['trailing-text']}> {trailingText}</span>
    </div>
  );
}

export default RateToolTip;
