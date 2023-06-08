import styles from './naver-ad.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import Link from 'next/link';

interface NaverAdProps {
  sid: string;
}

export default function NaverAd({ sid }: NaverAdProps) {
  return (
    <div className={cx('naver_ad_wrap')}>
      <Link href="#" id={sid}>
        <img src="https://dummyimage.com/720x160/cdce82/ffffff" alt="" />
      </Link>
    </div>
  );
}
