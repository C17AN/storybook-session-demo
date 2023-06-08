import styles from './popup.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface PopupOneBtnProps {
  title: string;
  txt: string;
  btn: string;
  sid: string;
}

export default function PopupOneBtn({ title, txt, btn, sid }: PopupOneBtnProps) {
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
        </div>
      </div>
      <div className={cx('btn')}>
        <button className={cx('confirm')} id={`${sid}_btn`}>
          {btn}
        </button>
      </div>
    </div>
  );
}
