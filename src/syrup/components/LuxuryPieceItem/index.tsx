import React from "react";
import style from "./LuxuryPieceItem.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames";
import Text from "../Text";
import { thousandSeperator } from "../../../utils/thousandSeperator";

type Props = {
  imageSrc: string;
  status: "모집 중" | "모집일자 미정" | "모집일자 D-DAY";
  price?: number | string;
  syrupOnly?: boolean;
  upperTitle?: string;
  lowerTitle?: string;
  expectedReturnRate?: number | string;
  openDday?: number | string;
  openCountDown?: number | string;
  currentPieceCount?: number | string;
  targetPieceCount?: number | string;
};

function LuxuryPieceItem({
  upperTitle,
  lowerTitle,
  syrupOnly,
  imageSrc,
  status,
  price,
  expectedReturnRate,
  openDday,
  currentPieceCount,
  targetPieceCount,
}: Props) {
  const progressPercentage =
    (Number(currentPieceCount) / Number(targetPieceCount)) * 100 ?? null;

  return (
    <div
      className={classNames(
        style.container,
        status === "모집 중" && style["border-highlight"]
      )}
    >
      <div className={style["pricing-container"]}>
        {syrupOnly && (
          <img
            src={imageSrc}
            className={style["syrup-only-badge"]}
            alt="시럽독점"
            width={45}
            height={45}
          />
        )}
        <div className={style["image-container"]}>
          <div
            className={classNames(
              status === "모집일자 미정" && style["image-background-blurred"],
              status === "모집일자 D-DAY" && style["image-background-red"]
            )}
          ></div>
          <img
            src={imageSrc}
            className={classNames(
              status === "모집 중" ? style.image : style["image-blurred"]
            )}
            alt={upperTitle}
          />
          {status === "모집일자 미정" && (
            <Text
              typography="t900"
              color="#fff"
              className={style["image-sub-text"]}
            >
              Coming Soon
            </Text>
          )}
          {status === "모집일자 D-DAY" && (
            <div className={style["image-sub-text-dday-container"]}>
              <div className={style["image-sub-text-dday"]}>오픈임박</div>
              <div className={style["image-sub-text-dday-count"]}>01:17:24</div>
            </div>
          )}
        </div>
        <div className={style["info-container"]}>
          {upperTitle && <p className={style["upper-title"]}>{upperTitle}</p>}
          {lowerTitle && <p className={style["lower-title"]}>{lowerTitle}</p>}
          {price && (
            <div className={style["pricing-text-container"]}>
              <span>
                모집가격{" "}
                <span className={style["pricing-text--small"]}>(1조각)</span>
              </span>
              <p className={style["pricing-text"]}>{price}원</p>
            </div>
          )}
          {expectedReturnRate && (
            <div
              className={style["pricing-text-container"]}
              id="pricing-text-container"
            >
              <span>
                예상 수익률{" "}
                <span className={style["pricing-text--small"]}>(트레져러)</span>
              </span>
              <p
                id="pricing-text"
                className={classNames(
                  style["pricing-text"],
                  Number(expectedReturnRate) > 0
                    ? style["pricing-text-plus"]
                    : style["pricing-text-minus"]
                )}
              >
                {Number(expectedReturnRate) > 0
                  ? `+${expectedReturnRate}`
                  : `${expectedReturnRate}`}
                %
              </p>
            </div>
          )}
        </div>
        {status === "모집 중" && (
          <div
            className={style["status-badge-ongoing"]}
            id="status-badge-ongoing"
          >
            모집중
          </div>
        )}
        {status === "모집일자 미정" && (
          <img
            src="/static/syrup_ico_24_alram_inactive_gray700.png"
            className={style["status-badge-tbd"]}
            id="status-badge-tbd"
          />
        )}
        {status === "모집일자 D-DAY" && (
          <img
            src="/static/syrup_ico_24_alram_active.png"
            className={style["status-badge-dday"]}
            id="status-badge-dday"
          />
        )}
      </div>
      <div className={style.divider}></div>
      {currentPieceCount && targetPieceCount && (
        <>
          <div
            className={classNames(
              style["progress-container"],
              status === "모집 중" && style["gather-in-progress"]
            )}
            id="progress-container"
          >
            {status === "모집 중" && (
              <div
                className={style["progress-count-container"]}
                id="progress-count-container"
                style={{ left: `calc(${progressPercentage}%)` }}
              >
                <img
                  src="/static/Union.svg"
                  className={style["progress-count-message"]}
                  id="progress-count-message"
                />
                <span className={style["progress-count-value"]}>
                  {Number(progressPercentage).toFixed(1)}%
                </span>
              </div>
            )}
            <div
              id="progress-bar-total"
              className={style["progress-bar-total"]}
            ></div>
            <div
              id="progress-bar"
              className={style["progress-bar"]}
              style={{
                position: "absolute",
                height: 10,
                width: `${progressPercentage}%`,
                background: "linear-gradient(270deg, #FF482A 0%, #FF9917 100%)",
                borderRadius: "8.5px",
                zIndex: 1,
                marginBottom: 2,
              }}
            />
          </div>
          <span className={style["progress-text"]} id="progress-text">
            {thousandSeperator(currentPieceCount)} /{" "}
            {thousandSeperator(targetPieceCount)} (조각)
          </span>
        </>
      )}
    </div>
  );
}

export default LuxuryPieceItem;
