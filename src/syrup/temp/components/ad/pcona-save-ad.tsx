import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './pcona-save-ad.module.scss';
const cx = classNames.bind(styles);

export default function PconaSaveAd() {
  useLoadSdk(
    'https://dev.pcona.kr/req?i=67c7379e-d3f7-4800-af84-65c5020e1f39&adid=&idtype=&is_optout=1',
    Math.random().toString(),
  );

  return (
    <div className={cx('pcona_ad_wrap')}>
      <div id="pcona_point" className={cx('point')}>
        <span>1P</span>
      </div>
      <div id="pcona_ad_contents" />
    </div>
  );
}

const useLoadSdk = (sdkUrl: string, scriptId: string): void => {
  useEffect(() => {
    // 스크립트 생성
    const script = document.createElement('script');
    script.src = sdkUrl;
    script.async = true;
    script.id = scriptId;

    // 페이지 진입 시 스크립트 추가
    document.body.appendChild(script);

    // 페이지 이탈 시 스크립트 삭제
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [sdkUrl, scriptId]);
};
