import React, { HTMLAttributes } from 'react';
import style from './DepositCard.module.scss';
import Text from '@components/common/Text';
import classNames from 'classnames';

export interface DepositCardProps extends HTMLAttributes<HTMLDivElement> {
  serviceName: string;
  depositAmount?: string | number;
  onRefresh?: () => void;
  color?: string;
  payback1Percent?: boolean;
  pointSendingAvailable?: boolean;
  isPointAccumulationAvailable?: boolean;
  depositAvailable?: boolean;
  isAccumulationAvailable?: boolean;
  onlySupportPointTransfer?: boolean;
  onlySupportCashTransfer?: boolean;
}

function DepositCard({
  serviceName,
  depositAmount,
  onRefresh,
  payback1Percent,
  pointSendingAvailable,
  depositAvailable,
  isPointAccumulationAvailable,
  isAccumulationAvailable,
  color,
  onlySupportPointTransfer,
  onlySupportCashTransfer,
  ...rest
}: DepositCardProps) {
  return (
    <div className={classNames(style.container, rest.className)}>
      <div className={style['title-container']}>
        <Text typography="t1000" as="h3" color={color}>
          {serviceName}
        </Text>
        <div className={style['amount-container']}>
          <Text typography="t1000" as="p">
            {depositAmount}
          </Text>
          <button onClick={onRefresh} className={style['refresh-button']} id="refresh-button">
            <img src="/static/syrup_ico_14_list_refresh_enable_gray500.png" alt="새로고침" />
          </button>
        </div>
      </div>
      <div className={style['button-container']}>
        {!onlySupportCashTransfer && (
          <button id="point-transfer-button" className={classNames(style['transfer-button'])}>
            {payback1Percent && (
              <img
                src="/static/syrup_ico_add_message_badge_primary.svg"
                alt="1% 재적립"
                className={style['payback-1-percent-image']}
              />
            )}
            포인트 보내기
          </button>
        )}
        {!onlySupportPointTransfer && (
          <button id="cash-transfer-button" className={classNames(style['transfer-button'])}>
            입금
          </button>
        )}
      </div>
    </div>
  );
}

export default DepositCard;
