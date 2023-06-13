import React, { HTMLAttributes } from "react";
import styles from "./BoxInput.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  buttonText?: string;
  placeholder?: string;
  onChange?: () => void;
  onButtonClick?: () => void;
}

const BoxInput = ({
  buttonText,
  placeholder,
  onChange,
  onButtonClick,
  ...rest
}: Props) => {
  return (
    <div {...rest}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

export default BoxInput;
