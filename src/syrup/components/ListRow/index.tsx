import classNames from "classnames";
import { ReactNode } from "react";
import style from "./ListRow.module.scss";

export type ListRowProps = {
  /**
   *아이콘 URL
   */
  icon?: ReactNode;
  /** 상품, 주식, 티커명 */
  name?: string;
  /** 신상품 여부 */
  isNewItem?: boolean;
  /** 상품 아이콘과 인접한 대상 설명 */
  content?: string;
  /** 왼쪽 하단에 오는 부가 컴포넌트 */
  leftBottomAccessary?: ReactNode;
  /** 오른쪽 하단에 오는 부가 컴포넌트 */
  rightBottomAccessary?: ReactNode;
  /** 오른쪽 하단의 부가 툴팁 */
  rightBottomToolTop?: ReactNode;
  /** 하단 테두리 숨김 여부 */
  hideBorderBottom?: boolean;
  bottomAccessary?: ReactNode;
};

function ListRow({
  icon,
  name,
  content,
  isNewItem,
  leftBottomAccessary,
  rightBottomAccessary,
  rightBottomToolTop,
  hideBorderBottom,
  bottomAccessary,
}: ListRowProps) {
  return (
    <div
      className={classNames(
        style["list-row-container"],
        hideBorderBottom && style["border-bottom-hidden"]
      )}
    >
      <div
        className={classNames(
          style.container,
          hideBorderBottom && style["border-bottom-hidden"]
        )}
      >
        {typeof icon === "string" && icon ? (
          <img
            src={icon ?? ""}
            alt={name}
            className={style.icon}
            width={40}
            height={40}
          />
        ) : (
          <>{icon}</>
        )}
        <div className={style["content-wrapper"]}>
          <div className={style["title-wrapper"]}>
            <div className={style.name}>{name}</div>
            {isNewItem && (
              <img
                className={style["new-badge"]}
                src="/static/syrup_ico_new_badge_primary.png"
              />
            )}
            {leftBottomAccessary && (
              <div className={style["lower-left-accesary"]}>
                {leftBottomAccessary}
              </div>
            )}
          </div>
          <div className={style["right-content-container"]}>
            <div className={style.content}>{content}</div>
            {rightBottomAccessary && (
              <div
                className={classNames(
                  style["lower-right-accesary"],
                  rightBottomToolTop ? style["has-tooltip"] : ""
                )}
              >
                {rightBottomAccessary}
              </div>
            )}
            <span className={style.tooltip}>
              {rightBottomToolTop && rightBottomToolTop}
            </span>
          </div>
        </div>
      </div>
      {bottomAccessary && (
        <div className={style["bottom-accessary"]}>{bottomAccessary}</div>
      )}
    </div>
  );
}

export default ListRow;
