import React, { HTMLAttributes, ReactNode } from 'react';
import style from './RoundedButton.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  type?: 'primary' | 'gray';
}

function RoundedButton({ className, onClick, children, type, ...rest }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(style['rounded-button'], `${style[`rounded-button--${type}`]}`)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default RoundedButton;
