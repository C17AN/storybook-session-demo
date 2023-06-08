import styles from './common.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Link from 'next/link';

interface EventBannerProps {
  sid: string;
}

export default function EventBanner({ sid }: EventBannerProps) {
  return (
    <div className={cx('event_banner')}>
      <Link href="#" id={`${sid}_event_banner`}>
        <img src="/static/@/1_top banner@2x.png" alt="" />
      </Link>
    </div>
  );
}
