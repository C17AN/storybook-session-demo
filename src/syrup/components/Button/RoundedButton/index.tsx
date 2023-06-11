import React, { HTMLAttributes, ReactNode } from "react";
import style from "./RoundedButton.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  block?: boolean;
  type?: "primary" | "gray";
}

function RoundedButton({
  className,
  onClick,
  children,
  block,
  type = "primary",
  ...rest
}: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        style["rounded-button"],
        style[`rounded-button--${type}`],
        block && style["button-block"]
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default RoundedButton;
