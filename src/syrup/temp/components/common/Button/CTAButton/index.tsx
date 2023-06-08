import React, { HTMLAttributes, PropsWithChildren } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';

interface CTAButton extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

function CTAButton({ children, className, disabled, ...rest }: PropsWithChildren<CTAButton>) {
  return (
    <button className={classNames(style['button-cta'], className)} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default CTAButton;
