import React, { HTMLAttributes } from "react";
import cx from "classnames";
import styles from "./TextField.module.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const TextField = ({ label, placeholder }: Props) => {
  return (
    <div>
      {label && <div className={cx(styles.label)}>{label}</div>}
      <input className={cx(styles.input)} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
