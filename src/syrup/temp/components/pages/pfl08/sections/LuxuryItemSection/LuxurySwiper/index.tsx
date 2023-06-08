import LuxuryPieceItem from '../LuxuryPieceItem';
import React from 'react';
import './LuxurySwiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

type Props = {};

const swiperOptions = {
  pagination: true,
  modules: [Pagination],
  spaceBetween: 10,
};

function LuxurySwiper(props: Props) {
  return (
    <Swiper {...swiperOptions}>
      <SwiperSlide className="swiperSlide">
        <LuxuryPieceItem
          status="모집 중"
          imageSrc="../static/badge_syruponly.png"
          upperTitle="Rolex"
          lowerTitle="롤렉스 서브마리너"
          price={'999,999,999'}
          expectedReturnRate={'30'}
          currentPieceCount={'13333'}
          targetPieceCount={'16000'}
        />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <LuxuryPieceItem
          status="모집 중"
          syrupOnly
          imageSrc="../static/badge_syruponly.png"
          upperTitle="Rolex"
          lowerTitle="롤렉스 서브마리너"
          price={'999,999,999'}
          expectedReturnRate={'30'}
          currentPieceCount={'13333'}
          targetPieceCount={'16000'}
        />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <LuxuryPieceItem
          status="모집일자 미정"
          imageSrc="../static/badge_syruponly.png"
          upperTitle="Rolex"
          lowerTitle="롤렉스 서브마리너"
          price={'999,999,999'}
          expectedReturnRate={'30'}
          currentPieceCount={'0'}
          targetPieceCount={'16000'}
        />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <LuxuryPieceItem
          status="모집일자 D-DAY"
          imageSrc="../static/badge_syruponly.png"
          upperTitle="Rolex"
          lowerTitle="롤렉스 서브마리너"
          price={'999,999,999'}
          expectedReturnRate={'30'}
          currentPieceCount={'0'}
          targetPieceCount={'16000'}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default LuxurySwiper;
