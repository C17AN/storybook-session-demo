import styles from './popup.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface PopupListTwoBtnProps {
  title: string;
  txt: string;
  list_txt: Array;
  btn_left: string;
  btn_right: string;
  sid: string;
}

export default function PopupListTwoBtn({ title, txt, list_txt, btn_left, btn_right, sid }: PopupListTwoBtnProps) {
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
      <div className={cx('agree_list')}>
        {list_txt.map((list_txt) => (
          <>
            <span>∙ {list_txt}</span>
          </>
        ))}
      </div>
      <div className={cx('btn', 'two')}>
        <button id={`${sid}_left_btn`}>{btn_left}</button>
        <button id={`${sid}_right_btn`}>{btn_right}</button>
      </div>
    </div>
  );
}
