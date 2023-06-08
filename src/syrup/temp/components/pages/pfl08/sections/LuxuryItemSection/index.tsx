import React from 'react';
import style from '../../pfl08.module.scss';
import LuxurySwiper from './LuxurySwiper';

function LuxuryItemSection() {
  return (
    <section className={style['section-3']}>
      <div className={style['secton-3__title-area']}>
        <h2 className={style['secton-3__title']}>명품 조각모집 공모중</h2>
        <img src="/static/info_gray.png" alt="명품 조각모집 공모중" />
      </div>
      <div className="luxury-items-swiper">
        <LuxurySwiper />
      </div>
    </section>
  );
}

export default LuxuryItemSection;
