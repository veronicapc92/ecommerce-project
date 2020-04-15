import React from "react";
import XButton from "./../XButton/XButton";
import "../assets/css/fonts.css";
import "./Register.css";

const Register = ({ show, onXButtonClick }) => {
  let classes = "register-form-container hidden";

  if (show) {
    classes = "register-form-container";
  }

  return (
    <div className={classes}>
      <div className="close-form-icon">
        <XButton onXButtonClick={onXButtonClick} />
      </div>
      <h1>Register</h1>
      <form className="register-form">
        <input
          className="register-form-input"
          type="text"
          placeholder="E-mail *"
        />
        <input
          className="register-form-input"
          type="text"
          placeholder="Password *"
        />
        <button className="register-form-button">Enter</button>
      </form>
    </div>
  );
};

export default Register;
