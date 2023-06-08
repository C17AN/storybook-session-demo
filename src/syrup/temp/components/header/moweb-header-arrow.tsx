import classNames from 'classnames/bind';
import styles from './moweb-header.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

interface MowebHeaderArrowProps {
  headerTxt: string;
  sid: number;
}

export default function MowebHeaderArrow({ headerTxt, sid }: MowebHeaderArrowProps) {
  return (
    <header className={cx('moweb_header_arrow')}>
      <Link href="" id={`${sid}_head_arrow`}>
        &lt;
      </Link>
      <div>
        <span>{headerTxt}</span>
      </div>
    </header>
  );
}
