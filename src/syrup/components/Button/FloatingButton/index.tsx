import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./FloatingButton.module.scss";
import Text from "../../Text";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  twoButton?: boolean;
  twoButtonChildren?: ReactNode;
  onClick?: () => void;
  onTwoButtonClick?: () => void;
  disabled?: boolean;
}

const FloatingButton = ({
  children,
  twoButton,
  twoButtonChildren,
  onTwoButtonClick,
  onClick,
  disabled,
}: Props) => {
  return (
    <div className={styles["button-container"]}>
      {twoButton && (
        <button
          className={styles.twoButton}
          onClick={onTwoButtonClick}
          disabled={disabled}
        >
          <Text typography="t900" as="span">
            {twoButtonChildren}
          </Text>
        </button>
      )}
      <button
        className={cx(styles.button)}
        onClick={onClick}
        disabled={disabled}
      >
        <Text typography="t900" as="span">
          {children}
        </Text>
      </button>
    </div>
  );
};

export default FloatingButton;
