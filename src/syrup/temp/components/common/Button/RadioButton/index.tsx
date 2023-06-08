import React, { HTMLAttributes, ReactNode } from 'react';
import style from './RadioButton.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  name?: string;
  value?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

function RadioButton({ name, value, className, onClick, children }: Props) {
  return (
    <>
      <input type="radio" id={`radio-button--${value}`} name={name} value={value} className={style.input} />
      <label className={classNames(style.container, className)} htmlFor={`radio-button--${value}`} onClick={onClick}>
        {children}
      </label>
    </>
  );
}

export default RadioButton;
