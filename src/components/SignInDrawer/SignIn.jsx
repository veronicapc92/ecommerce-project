import React, { Component } from "react";
import "../assets/css/fonts.css";
import "./SignIn.css";

class SignIn extends Component {
  state = { account: { email: "", password: "" } };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleInput = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { email, password } = this.state.account;
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <input
            value={email}
            name="email"
            className="sign-in-form-input"
            type="text"
            placeholder="E-mail *"
            onChange={this.handleInput}
          />
          <input
            value={password}
            name="password"
            className="sign-in-form-input"
            type="text"
            placeholder="Password *"
            onChange={this.handleInput}
          />
          <button className="sign-in-form-button">Enter</button>
        </form>
        <p className="sign-in-paragraph">
          Don't have an account?{" "}
          <span
            className="sign-in-span"
            onClick={this.props.onRegisterSpanClick}
          >
            Register
          </span>
        </p>
      </React.Fragment>
    );
  }
}

export default SignIn;
