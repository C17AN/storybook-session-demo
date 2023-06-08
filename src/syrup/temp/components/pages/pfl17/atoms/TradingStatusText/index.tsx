import React, { ReactNode } from 'react';
import style from './TradingStatusText.module.scss';
import Text from '@components/common/Text';

type Props = {
  children: ReactNode;
  tradingStatus: '투표중' | '투표완료';
};

function TradingStatusText({ children, tradingStatus }: Props) {
  return (
    <div className={style.container}>
      <Text className={style['status-text']} typography="b500" as="p" color="#777777">
        {children}
      </Text>
      {tradingStatus === '투표중' && (
        <Text typography="b500" as="p" color="#BBBBBB">
          {' '}
          (투표중)
        </Text>
      )}
      {tradingStatus === '투표완료' && (
        <Text typography="b500" as="p" color="#BBBBBB">
          {' '}
          (투표완료)
        </Text>
      )}
    </div>
  );
}

export default TradingStatusText;
