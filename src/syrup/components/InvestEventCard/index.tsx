import React, { ReactNode } from "react";
import style from "./InvestEventCard.module.scss";

type Props = {
  icon?: string;
  backgroundColor?: string;
  topAccesary?: ReactNode;
  title: string;
  titleColor?: string;
  content: string;
  contentColor?: string;
};

function InvestEventCard({
  icon,
  backgroundColor,
  topAccesary,
  title,
  titleColor,
  content,
  contentColor,
}: Props) {
  return (
    <div className={style.container} style={{ backgroundColor }}>
      <img src={icon} className={style.icon} alt={title} />
      <div className={style["content-wrapper"]}>
        {topAccesary && <span className={style.accessary}>{topAccesary}</span>}
        <p className={style.title} style={{ color: titleColor }}>
          {title}
        </p>
        <div className={style.content} style={{ color: contentColor }}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default InvestEventCard;
