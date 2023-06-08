import React, { HTMLAttributes } from 'react';
import style from './RefreshButton.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

function RefreshButton({ onClick, children }: Props) {
  return (
    <button onClick={onClick} className={style.container}>
      <img src="/static/ico_update.png" alt="새로고침" className={style['refresh-icon']} />
      {children}
    </button>
  );
}

export default RefreshButton;
