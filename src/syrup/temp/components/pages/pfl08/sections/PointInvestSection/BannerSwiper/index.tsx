import React from 'react';
import style from './BannerSwiper.module.scss';

type Props = {};

function BannerSwiper(props: Props) {
  return (
    <div className={style.container}>
      <img src="/static/1_topbanner.png" />
    </div>
  );
}

export default BannerSwiper;
