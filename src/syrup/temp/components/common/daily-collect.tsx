import styles from './daily-collect.module.scss';
import classNames from 'classnames/bind';
import Lottie from 'react-lottie-player';
const cx = classNames.bind(styles);

import Link from 'next/link';

interface DailyCollectProps {
  sid: string;
  done: boolean;
}

export default function DailyCollect({ sid, done }: DailyCollectProps) {
  //모션은 디자인 완료후 파일명 변경 예정
  const collectLottieUrl = done ? '/lottie/PFL01_motion4_v1.json' : '/lottie/PFL01_motion4_v1.json';

  return (
    <div className={cx('daily_collect')}>
      <div className={cx('motion')}>
        <Lottie className="lottie" path={collectLottieUrl} loop play />
      </div>
      <div className={cx('daily_collect_wrap')}>
        <div className={cx('top')}>
          <span className={cx('title')}>매일 모으기</span>
          <div>
            {done && <a href="#">모은 포인트 불리러 가기</a>}
            {!done && <span>남은미션 1개</span>}
          </div>
        </div>
        <ul>
          <li className={cx('attendance')}>
            <Link href="#" id={`${sid}_daily_collect_1`}>
              <div className={cx('img_wrap')}>
                <img src="/static/collect/morepoint_video@2x.png" alt="출석체크 심볼 이미지" />
              </div>
              <div className={cx('info')}>
                <span className={cx('service_name')}>출석 체크하기</span>
                <span className={cx('benefit')}>최대 3P</span>
              </div>
              <div className={cx('status')}>
                <span>받기</span>
              </div>
            </Link>
          </li>
          <li className={cx('quiz')}>
            <Link href="#" id={`${sid}_daily_collect_2`}>
              <div className={cx('img_wrap')}>
                <img src="/static/collect/morepoint_pointbox@2x.png" alt="퀴즈 풀기 심볼 이미지" />
              </div>
              <div className={cx('info')}>
                <span className={cx('service_name')}>퀴즈 풀기</span>
                <span className={cx('benefit')}>최대 10,000P</span>
              </div>
              <div className={cx('status')}>
                <span>받기</span>
              </div>
            </Link>
          </li>
          <li className={cx('search')}>
            <Link href="#" id={`${sid}_daily_collect_3`}>
              <div className={cx('img_wrap')}>
                <img src="/static/collect/morepoint_point@2x.png" alt="검색 심볼 이미지" />
              </div>
              <div className={cx('info')}>
                <span className={cx('service_name')}>검색하고 상품보기</span>
                <span className={cx('benefit')}>최대 16P</span>
              </div>
              <div className={cx('status')}>
                <span>받기</span>
              </div>
            </Link>
          </li>
          <li className={cx('vote')}>
            <Link href="#" id={`${sid}_daily_collect_4`}>
              <div className={cx('img_wrap')}>
                <img src="/static/collect/morepoint_treasurer@2x.png" alt="참견투표 심볼 이미지" />
              </div>
              <div className={cx('info')}>
                <span className={cx('service_name')}>참견 투표하기</span>
                <span className={cx('benefit')}>3연속 맞히면 100P</span>
              </div>
              <div className={cx('status')}>
                <span>받기</span>
              </div>
            </Link>
          </li>
          {/* 완료시 li.vote에 done class 추가 */}
          <li className={cx('vote', 'done')}>
            <Link href="#" id={`${sid}_daily_collect_5}`}>
              <div className={cx('img_wrap')}>
                <img src="/static/collect/morepoint_treasurer@2x.png" alt="참견투표 심볼 이미지" />
              </div>
              <div className={cx('info')}>
                <span className={cx('service_name')}>참견 투표하기 참견 투표하기 참견 투표하기</span>
                <span className={cx('benefit')}>3연속 맞히면 100P 3연속 맞히면 100P</span>
              </div>
              <div className={cx('status')}>
                <span>완료</span>
              </div>
            </Link>
          </li>
          {/* 미진행시 li.vote에 done class 추가 */}
          <li className={cx('vote', 'done')}>
            <Link href="#" id={`${sid}_daily_collect_5`}>
              <div className={cx('img_wrap')}>
                <img src="/static/collect/morepoint_treasurer@2x.png" alt="참견투표 심볼 이미지" />
              </div>
              <div className={cx('info')}>
                <span className={cx('service_name')}>참견 투표하기 참견 투표하기 참견 투표하기</span>
                <span className={cx('benefit')}>주말에는 쉬어요 주말에는 쉬어요 주말에는 쉬어요 주말에는 쉬어요</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className={cx('btn_more')}>
          <Link href="#" className={cx('more')} id={`${sid}_daily_collect_btn`}>
            더보기
          </Link>
        </div>
      </div>
    </div>
  );
}
