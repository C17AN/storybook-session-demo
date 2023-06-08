import React from 'react';
import style from './AppBar.module.scss';

type Props = {
  hasBackButton?: boolean;
  pageName?: string;
};

const AppBar = ({ hasBackButton }: Props) => {
  return (
    <div className={style.container}>
      {hasBackButton && (
        <img className={style['prev-page-button']} src="/static/back_left_enabled_gray100.png" alt="뒤로가기" />
      )}
    </div>
  );
};

export default AppBar;
