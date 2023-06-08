import React from 'react';
import style from '../../pfl08.module.scss';
import PointGrowthSwiper from './PointGrowthSwiper';

type Props = {};

function PointGrowthSection(props: Props) {
  return (
    <section className={style['section-6']}>
      <div className={style['section-6__title-container']}>
        <h2 className={style['section-6__title']}>포인트 불리는 Tip</h2>
      </div>
      <div className={style['section-6__swiper-container']}>
        <PointGrowthSwiper />
      </div>
    </section>
  );
}

export default PointGrowthSection;
