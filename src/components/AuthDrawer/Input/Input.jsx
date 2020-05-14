import React, { Component } from "react";
import styles from "./input.module.css";

class Input extends Component {
  state = { eyeClicked: false };

  handleEyeClick = () => {
    this.setState({ eyeClicked: !this.state.eyeClicked });
  };
  render() {
    const {
      name,
      value,
      placeholder,
      error,
      onInput,
      onPropertyValidation,
      onPasswordMessage,
    } = this.props;

    const { eyeClicked } = this.state;

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
            <div className={classes} onClick={this.handleEyeClick}>
              <i className="far fa-eye"></i>
            </div>
          )}
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    );
  }
}

export default Input;
