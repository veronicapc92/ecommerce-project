import React, { Component } from "react";
import "../assets/css/fonts.css";
import "./Register.css";

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleInput = () => {};

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="register-form">
          <input
            className="register-form-input"
            type="text"
            placeholder="Name *"
          />
          <input
            className="register-form-input"
            type="text"
            placeholder="Email *"
          />
          <input
            className="register-form-input"
            type="text"
            placeholder="Password *"
          />
          <input
            className="register-form-input"
            type="text"
            placeholder="Confirm password *"
          />
          <button className="register-form-button">Enter</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
