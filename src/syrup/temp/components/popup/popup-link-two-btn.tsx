import styles from './popup.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import Link from 'next/link';

interface PopupLinkTwoBtnProps {
  title: string;
  txt: string;
  link_txt: string;
  btn_left: string;
  btn_right: string;
  sid: string;
}

export default function PopupLinkTwoBtn({ title, txt, link_txt, btn_left, btn_right, sid }: PopupLinkTwoBtnProps) {
  return (
    <div className={cx('layer_popup')}>
      <div className={cx('popup_contents')}>
        <div className={cx('pop')}>
          <span className={cx('title')}>
            {title.split('<br>').map((title) => (
              <>
                {title}
                <br />
              </>
            ))}
          </span>
          <p>
            {txt.split('<br>').map((txt) => (
              <>
                {txt}
                <br />
              </>
            ))}
          </p>
          <div className={cx('link')}>
            <Link href="#" id={`${sid}_link`}>
              {link_txt}
            </Link>
          </div>
        </div>
      </div>
      <div className={cx('btn', 'two')}>
        <button id={`${sid}_left_btn`}>{btn_left}</button>
        <button id={`${sid}_right_btn`}>{btn_right}</button>
      </div>
    </div>
  );
}
