import classNames from 'classnames/bind';
import styles from './moweb-header.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

type Props = {
  headerText: string;
  ocbPoint: number | string;
  sid: number | string;
};

export default function MowebHeader({ headerText, ocbPoint, sid }: Props) {
  return (
    <header className={cx('moweb_header')}>
      <h1 className={cx('title')}>{headerText}</h1>
      {ocbPoint ? <div className={cx('ocbpoint')}>{ocbPoint}</div> : ''}
      <div className={cx('gnb_list')}>
        <Link className={cx('alarm')} href="" id={sid + '_alarm'}>
          <span>알림</span>
        </Link>
        <Link className={cx('barcode')} href="" id={sid + '_barcode'}>
          <span>바코드</span>
        </Link>
      </div>
    </header>
  );
}
