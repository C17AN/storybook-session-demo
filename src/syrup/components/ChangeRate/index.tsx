import React from "react";
import style from "./ChangeRate.module.scss";
import classNames from "classnames";

type Props = {
  size?: "small" | "default";
  value?: string | number;
  percentageValue: string | number;
  showPercentageOnly?: boolean;
};

function ChangeRate({
  size = "default",
  value,
  percentageValue,
  showPercentageOnly,
}: Props) {
  const isPlus = Number(percentageValue) > 0;
  const isNeutural = Number(percentageValue) === 0;
  const percentageValueText =
    !showPercentageOnly && !isNeutural
      ? `${value}원 (${isPlus ? "+" : ""}${percentageValue}%)`
      : !showPercentageOnly
      ? `${value} (${isPlus ? "+" : ""}${percentageValue}%)`
      : `${isPlus ? "+" : ""}${percentageValue}%`;

  return (
    <div className={classNames([style.container])}>
      {!isNeutural && !showPercentageOnly && (
        <img
          src={
            isPlus
              ? "https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/plus_triangle.png"
              : "https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/minus_triangle.png"
          }
          className={style.icon}
          alt={isPlus ? "상승" : "하락"}
        />
      )}
      <div
        className={classNames(
          style["percentage-text-container"],
          isPlus ? style.plus : isNeutural ? style.neutural : style.minus
        )}
      >
        <span
          className={classNames(
            style["percentage-text"],
            size === "small" && style["percentage-text-small"]
          )}
        >
          {percentageValueText}
        </span>
      </div>
    </div>
  );
}

export default ChangeRate;
