import styles from './popup.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import Link from 'next/link';

interface SlideUpProps {
  type: string;
  service: string;
  btn: string;
  title: string;
  list_txt: Array;
  sid: string;
  on: boolean;
}

export default function SlideUp({ type, service, btn, title, list_txt, sid, on = true }: SlideUpProps) {
  return (
    /* TODO : 
    
      div.layer_popup_props.type 슬라이드업시 ani class, 
                                슬라이드다운시 ani_back class,   
                                상시 노출 on class  각각 추가 적용
    */
    <div className={cx('layer_popup_' + type, { on })}>
      <div className={cx('popup_contents')}>
        <div className={cx('pop')}>
          <span className={cx('title')}>{title}</span>
          <Link href="#" className={cx('close')} id={`${sid}_close`}>
            닫기
          </Link>
          <div className={cx('agree_div', service)}>
            <ul>
              {list_txt.map((list_txt, index) => (
                <>
                  <li>
                    <Link href="#" id={`${sid}_agree_${index}`}>
                      <span>
                        {list_txt} <em>(필수)</em>
                      </span>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
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
