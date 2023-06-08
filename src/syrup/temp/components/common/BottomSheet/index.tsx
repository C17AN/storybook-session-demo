import React, { ReactNode } from 'react';
import style from './BottomSheet.module.scss';
import Text from '../Text';

type Props = {
  title?: ReactNode;
  hasCloseButton?: boolean;
  open?: boolean;
  onClose?: boolean;
  children?: ReactNode;
};

function BottomSheet({ title, hasCloseButton, open, onClose, children }: Props) {
  return (
    <div className={style.container} id="bottomsheet">
      <div className={style['dimmed-layer']} id="bottomsheet-dimmed-layer"></div>
      <div className={style['bottomsheet-body']} id="bottomsheet-body">
        <div className={style['title-container']}>
          <Text typography="t700" as="h3">
            {title}
          </Text>
          {hasCloseButton && (
            <img
              className={style['icon-close']}
              src="/static/syrup_ico_34_popup_close_enabled_gray100.png"
              alt="팝업 닫기"
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export default BottomSheet;
