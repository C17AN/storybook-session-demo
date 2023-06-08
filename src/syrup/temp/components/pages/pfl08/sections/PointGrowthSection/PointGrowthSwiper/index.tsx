import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PointGrowthSwiper.scss';
import { Pagination } from 'swiper';
import PointGrowthItem from '../PointGrowthItem';

type Props = {};

const swiperOptions = {
  pagination: true,
  modules: [Pagination],
  spaceBetween: 10,
};

function PointGrowthSwiper(props: Props) {
  return (
    <div className="point-growth-items-swiper">
      <Swiper {...swiperOptions}>
        <SwiperSlide className="swiperSlide">
          <PointGrowthItem />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <PointGrowthItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PointGrowthSwiper;
