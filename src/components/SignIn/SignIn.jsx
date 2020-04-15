import React from "react";
import XButton from "../XButton/XButton";
import { Link } from "react-router-dom";
import "../assets/css/fonts.css";
import "./SignIn.css";

const SignIn = ({ show, onXButtonClick, onRegisterSpanClick }) => {
  let classes = "sign-in-container";
  if (show) {
    classes = "sign-in-container open";
  }

  return (
    <div className={classes}>
      <div className="close-form-icon">
        <XButton onXButtonClick={onXButtonClick} />
      </div>
      <h1>Sign In</h1>
      <form className="sign-in-form">
        <input className="sign-in-input" type="text" placeholder="E-mail *" />
        <input className="sign-in-input" type="text" placeholder="Password *" />
        <button className="sign-in-button">Enter</button>
      </form>
      <p className="register-paragraph">
        Don't have an account?{" "}
        <span className="register-span" onClick={onRegisterSpanClick}>
          Register
        </span>
      </p>
    </div>
  );
};

export default SignIn;
