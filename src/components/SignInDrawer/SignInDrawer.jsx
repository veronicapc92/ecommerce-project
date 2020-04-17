import React, { Component } from "react";
import XButton from "../XButton/XButton";
import Register from "./Register";
import SignIn from "./SignIn";
import "../assets/css/fonts.css";
import "./SignInDrawer.css";

class SignInDrawer extends Component {
  render() {
    const {
      show,
      registerDrawerOpen,
      onXButtonClick,
      onRegisterSpanClick,
      onEnterButtonClick,
    } = this.props;

    let classes = "sign-in-container";
    if (show) {
      classes = "sign-in-container open";
    }

    return (
      <div className={classes}>
        <div className="close-form-icon">
          <XButton onXButtonClick={onXButtonClick} />
        </div>
        {registerDrawerOpen && <Register />}
        {!registerDrawerOpen && (
          <SignIn onRegisterSpanClick={onRegisterSpanClick} />
        )}
      </div>
    );
  }
}

export default SignInDrawer;
