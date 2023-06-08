import React, { ReactNode } from "react";
import style from "./Chip.module.scss";

type Props = {
  backgroundColor?: string;
  color?: string;
  children: ReactNode;
};

function Chip({ backgroundColor, color, children }: Props) {
  return (
    <span className={style.container} style={{ backgroundColor, color }}>
      {children}
    </span>
  );
}

export default Chip;
