import React from 'react';
import style from './Border.module.scss';

type Props = {
  horizontalPadding?: number;
  verticalPadding?: number;
  size?: number;
  color?: string;
};

function Border({ horizontalPadding, verticalPadding, size, color }: Props) {
  return (
    <div
      style={{
        padding: `${verticalPadding}px ${horizontalPadding}px`,
        width: '100%',
        border: `${size}px solid ${color}`,
      }}
    />
  );
}

export default Border;
