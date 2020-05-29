import React, { useState } from "react";
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
  const [eyeClicked, setEyeState] = useState(false);

  let classes = eyeClicked ? styles.clicked : styles.notClicked;

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          value={value}
          name={name}
          className={styles.input}
          type={name === "password" && !eyeClicked ? "password" : "text"}
          autoComplete="off"
          placeholder={placeholder}
          onChange={onInput}
          onBlur={onPropertyValidation}
          onFocus={onPasswordMessage}
        ></input>
        {name === "password" && (
          <div
            className={classes}
            onClick={() => setEyeState((prevState) => !prevState)}
          >
            <i className="far fa-eye"></i>
          </div>
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
