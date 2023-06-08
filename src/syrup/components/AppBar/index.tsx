import React from "react";
import style from "./AppBar.module.scss";

type Props = {
  hasBackButton?: boolean;
  pageName?: string;
};

const AppBar = ({ hasBackButton, pageName }: Props) => {
  return (
    <div className={style.container}>
      {hasBackButton && (
        <img
          className={style["prev-page-button"]}
          src="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/back_left_enabled_gray100.png"
          alt="뒤로가기"
        />
      )}
      <div className={style["appbar-page-name"]}>{pageName}</div>
    </div>
  );
};

export default AppBar;
