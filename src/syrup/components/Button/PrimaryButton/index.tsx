import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./PrimaryButton.module.scss";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "filled" | "outline";
}

const PrimaryButton = ({ children, type = "filled", ...rest }: Props) => {
  const buttonTypeClassName = `button-type-${type}`;

  return (
    <div className={styles["button-container"]}>
      <button
        className={cx(
          styles.button,
          styles[buttonTypeClassName],
          rest.className
        )}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
