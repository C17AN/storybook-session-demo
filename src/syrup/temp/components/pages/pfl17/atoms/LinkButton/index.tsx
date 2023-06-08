import React, { ReactNode } from 'react';
import style from './LinkButton.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  href?: string;
  children: ReactNode;
  subContent?: ReactNode;
  type?: 'primary' | 'gray';
};

function LinkButton({ href, children, subContent, type }: Props) {
  return (
    <Link href="/">
      <div className={classNames([style.container, style[`container-${type}`]])}>
        <span className={style.content}>{children}</span>
        <div className={style['sub-content-container']}>
          <span className={classNames(style[`sub-content-${type}`])}>{subContent}</span>
          {type === 'gray' && <img className={style['link-icon']} src="/static/syrup_ico_14_arrow_right_gray400.png" />}
          {type === 'primary' && (
            <img className={style['link-icon']} src="/static/syrup_ico_14_arrow_right_primary.png" />
          )}
        </div>
      </div>
    </Link>
  );
}

export default LinkButton;
