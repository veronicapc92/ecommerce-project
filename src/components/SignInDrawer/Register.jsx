import React, { Component } from "react";
import Input from "./../Input/Input";
import Joi from "@hapi/joi";
import { register } from "../../services/userService";
import "../assets/css/fonts.css";
import "./Register.css";

class Register extends Component {
  state = {
    data: { name: "", email: "", password: "", confirmedPassword: "" },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().required().alphanum(),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{6,16}$"))
      .label("Password"),
    confirmedPassword: Joi.string().required(),
  });

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = "This field is required";
    }
    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    await register(this.state.data);
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

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="register-form">
          <Input
            name="name"
            value={data.name}
            placeholder="Name *"
            onInput={this.handleInput}
            error={errors.name}
          />
          <Input
            name="email"
            value={data.email}
            placeholder="Email *"
            onInput={this.handleInput}
            error={errors.email}
          />
          <Input
            name="password"
            value={data.password}
            placeholder="Password *"
            onInput={this.handleInput}
            error={errors.password}
          />
          <Input
            name="confirmedPassword"
            value={data.confirmedPassword}
            placeholder="Confirm Password *"
            onInput={this.handleInput}
            error={errors.confirmedPassword}
          />
          <button className="register-form-button">Enter</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
