import React from "react";
import styles from "./input.module.css";

const Input = ({ name, value, placeholder, error, onInput }) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        name={name}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onInput}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
