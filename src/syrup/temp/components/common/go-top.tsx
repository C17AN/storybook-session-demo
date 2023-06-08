import styles from './go-top.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

interface GoTopProps {
  sid: string;
}

export default function GoTop({ sid }: GoTopProps) {
  // TODO : 모션 적용 (스크롤시 div.go_top에 on class 추가)

  const [toggleBtn, setToggleBtn] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return toggleBtn ? (
    <div onClick={goToTop} className={cx('go_top', 'on')} id={`${sid}_go_top`}>
      최상단으로 이동
    </div>
  ) : (
    <div onClick={goToTop} className={cx('go_top')} id={`${sid}_go_top`}>
      최상단으로 이동
    </div>
  );
}
