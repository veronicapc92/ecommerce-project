import React, { Component } from "react";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import "./AuthDrawer.css";

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
        <div className="close-form-icon" onClick={onXButtonClick}>
          ×
        </div>
        {registerDrawerOpen && <Register />}
        {!registerDrawerOpen && (
          <SignIn
            onRegisterSpanClick={onRegisterSpanClick}
            onEnterButtonClick={onEnterButtonClick}
          />
        )}
      </div>
    );
  }
}

export default SignInDrawer;
