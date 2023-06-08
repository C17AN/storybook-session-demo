import styles from './swiper-grid.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperGridProps {
  sid: string;
}

export default function SwiperGrid({ sid }: SwiperGridProps) {
  const options = {
    pagination: true,
    modules: [Pagination],
    spaceBetween: 0,
  };

  return (
    <Swiper {...options} className={cx('swiper')}>
      <SwiperSlide className={cx('swiperSlide')}>
        <Link href="#" id={`${sid}_swiper1`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
        <Link href="#" id={`${sid}_swiper2`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
        <Link href="#" id={`${sid}_swiper3`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
        <Link href="#" id={`${sid}_swiper4`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}>
        <Link href="#" id={`${sid}_swiper5`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
        <Link href="#" id={`${sid}_swiper6`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
        <Link href="#" id={`${sid}_swiper7`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
        <Link href="#" id={`${sid}_swiper8`}>
          <img src="https://dummyimage.com/320x320/cdce82/ffffff" alt="" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
