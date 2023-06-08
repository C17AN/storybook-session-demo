import styles from './swiper-example.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperExample() {
  const options = {
    pagination: true,
    modules: [Pagination],
    spaceBetween: 10,
  };

  return (
    <Swiper {...options} className={cx('swiper')}>
      <SwiperSlide className={cx('swiperSlide')}></SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}></SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}></SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}></SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}></SwiperSlide>
    </Swiper>
  );
}
