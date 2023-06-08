import classNames from 'classnames/bind';
import styles from './swiper-winner.module.scss';

const cx = classNames.bind(styles);

import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

export default function SwiperWinner() {
  const options = {
    direction: 'vertical',
    spaceBetween: 10,
    modules: [Autoplay],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  } as SwiperProps;

  return (
    <Swiper {...options} className={cx('swiper')}>
      <SwiperSlide className={cx('swiperSlide')}>
        <span className={cx('winner_txt')}>김*희님이 CJ로 100P 받았어요!</span>
        <span className={cx('time')}>방금 전</span>
      </SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}>
        <span className={cx('winner_txt')}>일이삼사오육칠팔구십일이삼사오육칠팔구십</span>
        <span className={cx('time')}>N시간 전</span>
      </SwiperSlide>
      <SwiperSlide className={cx('swiperSlide')}>
        <span className={cx('winner_txt')}>자주 사용하는 멤버십을 선택하고 시작하세요!</span>
      </SwiperSlide>
    </Swiper>
  );
}
