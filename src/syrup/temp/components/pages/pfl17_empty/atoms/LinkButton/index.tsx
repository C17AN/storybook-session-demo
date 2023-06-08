import React, { ReactNode } from 'react';
import style from './LinkButton.module.scss';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  subContent?: ReactNode;
  type?: 'primary' | 'gray';
};

function LinkButton({ children, subContent, type }: Props) {
  return (
    <div className={classNames([style.container, style[`container-${type}`]])}>
      <span className={style.content}>{children}</span>
      <div>{subContent}</div>
    </div>
  );
}

export default LinkButton;
