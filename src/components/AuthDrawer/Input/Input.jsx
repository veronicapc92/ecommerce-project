import React, { useState } from "react";
import { useField } from "formik";
import styles from "./input.module.css";

const Input = (props) => {
  const [field, meta] = useField(props);
  const [eyeClicked, setEyeState] = useState(false);

  let classes = eyeClicked ? styles.clicked : styles.notClicked;

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          {...field}
          {...props}
          autoComplete="off"
          type={props.name === "password" && !eyeClicked ? "password" : "text"}
        />
        {props.name === "password" && (
          <div
            className={classes}
            onClick={() => setEyeState((prevState) => !prevState)}
          >
            <i className="far fa-eye"></i>
          </div>
        )}
        {meta.touched && meta.error ? (
          <div className={styles.errorMessage}>{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
