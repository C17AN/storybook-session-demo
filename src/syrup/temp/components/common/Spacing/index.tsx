import React from 'react';

type Props = {
  size: number;
  backgroundColor?: string;
};

function Spacing({ size, backgroundColor }: Props) {
  return <div style={{ height: size, backgroundColor: backgroundColor ? backgroundColor : '' }}></div>;
}

export default Spacing;
