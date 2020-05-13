import React from "react";
import styles from "./input.module.css";

const Input = ({
  name,
  value,
  placeholder,
  error,
  onInput,
  onPropertyValidation,
  onPasswordMessage,
}) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        name={name}
        className={styles.input}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        onChange={onInput}
        onBlur={onPropertyValidation}
        onFocus={onPasswordMessage}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
