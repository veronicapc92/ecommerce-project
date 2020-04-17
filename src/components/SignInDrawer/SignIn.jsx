import React, { Component } from "react";
import Input from "./../Input/Input";
import Joi from "@hapi/joi";
import "../assets/css/fonts.css";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{6,16}$"))
      .label("Password"),
  });

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.account, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = "This field is required";
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  // validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const schema = Joi.object({ [name]: this.schema[name] });
  //   const { error } = schema.validate(obj);
  //   return error ? "This field is required" : null;
  // };

  handleInput = ({ currentTarget: input }) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <Input
            value={account.email}
            name="email"
            placeholder="E-mail *"
            onInput={this.handleInput}
            error={errors.email}
          />
          <Input
            value={account.password}
            name="password"
            placeholder="Password *"
            onInput={this.handleInput}
            error={errors.password}
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
