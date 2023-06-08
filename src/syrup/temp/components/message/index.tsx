import { ReactNode } from 'react';

// 다음과 같이 모듈에서 style을 import하고, classNames 라이브러리를 사용해 bind합니다.
import classNames from 'classnames/bind';
import styles from './hint-box.module.scss';
import React from 'react';
// cx 대신, 다른 변수명을 사용할 수 있습니다.
const cx = classNames.bind(styles);

// 컴포넌트가 받을 props에 대한 타입핑입니다.
interface HintBoxProps {
  children: ReactNode;
  important?: boolean;
  hidden?: boolean;
}
// 컴포넌트의 이름은 파일명에 대한 PascalCase으로 지정합니다.
export default function HintBox({ children, important, hidden }: HintBoxProps) {
  return (
    // children을 그대로 렌더링하고, props로 받은 important 변수에 따라 important className을 스위칭합니다.
    <div className={cx('hintBox', { important: important, hidden: hidden })}>{children}</div>
  );
}
