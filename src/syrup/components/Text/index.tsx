import React, { ReactNode } from "react";
import style from "./Text.module.scss";
import classNames from "classnames";

type Props = {
  typography:
    | "t100"
    | "t200"
    | "t300"
    | "t400"
    | "t500"
    | "t600"
    | "t700"
    | "t800"
    | "t900"
    | "t1000"
    | "t1050"
    | "t1100"
    | "t1200"
    | "t1300"
    | "t1400"
    | "b100"
    | "b200"
    | "b300"
    | "b400"
    | "b500"
    | "c100"
    | "c200";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "li";
  children: ReactNode;
  color?: string;
  className?: string;
  id?: string;
  textAlign?: "left" | "right" | "center";
};

/**
 *
 * @param typography
 * DSL에 정의된 typography 키 이름입니다.
 *
 * @param as
 * 렌더링할 시멘틱 태그 이름입니다. (div, span 등)
 */
function Text({
  typography,
  as,
  children,
  className,
  id,
  color,
  textAlign,
}: Props) {
  switch (as) {
    case "h1":
      return (
        <h1
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </h6>
      );
    case "p":
      return (
        <p
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </span>
      );
    case "li":
      return (
        <li
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </li>
      );
    default:
      return (
        <div
          className={classNames([
            style[`text-${typography}`],
            style[`text-${textAlign}`],
            className,
          ])}
          id={id}
          style={{ color }}
        >
          {children}
        </div>
      );
  }
}

export default Text;
