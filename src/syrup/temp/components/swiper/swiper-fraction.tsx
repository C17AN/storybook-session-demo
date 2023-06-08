import styles from './swiper-fraction.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperFractionProps {
  sid: string;
}

export default function SwiperFraction({ sid }: SwiperFractionProps) {
  const options = {
    pagination: {
      type: 'fraction',
    },
    modules: [Pagination],
    spaceBetween: 0,
  };

  return (
    <Swiper {...options} className={cx('swiper')}>
      <SwiperSlide className={cx('swiperSlide')}>
        <Link href="#" id={`${sid}_swiper`}>
          <img src="https://dummyimage.com/640x280/cdce82/ffffff" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}>
        <Link href="#" id={`${sid}_swiper`}>
          <img src="https://dummyimage.com/640x280/ffffff/cdce82" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}>
        <Link href="#" id={`${sid}_swiper`}>
          <img src="https://dummyimage.com/640x280/cdce82/ffffff" alt="" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
