import React, { Component } from "react";
import Input from "../../Input/Input";
import Joi from "@hapi/joi";
import { register } from "../../../services/userService";
import styles from "./register.module.css";

class Register extends Component {
  state = {
    data: { name: "", email: "", password: "", confirmedPassword: "" },
    errors: {},
    focusOn: false,
  };

  schema = Joi.object({
    name: Joi.string().required().alphanum().label("Name"),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,16})"))
      .label("Password"),
    confirmedPassword: Joi.string().required().label("Confirmed password"),
  });

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    try {
      const response = await register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = "This email already exists ";
        this.setState({ errors });
      }
    }
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    // for (let item of error.details) {
    //   errors[item.path[0]] = "This field is required";
    // }

    for (let item of error.details) {
      if (item.message.includes("E-mail"))
        errors[item.path[0]] = "Please enter a valid e-mail address";
      if (item.message.includes("Password"))
        errors[item.path[0]] = "Please enter a valid password";
      if (item.message.includes("empty"))
        errors[item.path[0]] = "This field is required";
    }

    // if (this.state.data.password !== this.state.data.confirmedPassword)
    //   errors.confirmedPassword = "Passwords must match";

    return errors;
  };

  validateProperty = (name, value) => {
    const errors = { ...this.state.errors };
    const obj = { [name]: value };
    const schema = Joi.object({ [name]: this.schema.extract(name) });
    const { error } = schema.validate(obj);

    if (!error) {
      errors[name] = undefined;
      this.setState({ errors: errors || {} });
      return;
    }

    if (error.details[0].message.includes("E-mail"))
      errors[name] = "Please enter a valid e-mail address";
    if (error.details[0].message.includes("Password"))
      errors[name] = "Please enter a valid password";
    if (error.details[0].message.includes("empty"))
      errors[name] = "This field is required";

    this.setState({ errors: errors || {} });
  };

  handleInput = ({ currentTarget: input }) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  handlePasswordMessage = ({ currentTarget: input }) => {
    let focusOn = this.state.focusOn;
    if (input.name === "password") focusOn = true;
    else focusOn = false;

    this.setState({ focusOn });
  };

  render() {
    const { data, errors, focusOn } = this.state;

    let classes = styles.passwordMessageOn;
    if (!focusOn) classes = styles.passwordMessageOff;

    return (
      <React.Fragment>
        <h1 className={styles.headline}>Register</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={data.name}
            placeholder="Name *"
            onInput={this.handleInput}
            onPropertyValidation={() =>
              this.validateProperty("name", data.name)
            }
            onPasswordMessage={this.handlePasswordMessage}
            error={errors.name}
          />
          <Input
            name="email"
            value={data.email}
            placeholder="Email *"
            onInput={this.handleInput}
            onPropertyValidation={() =>
              this.validateProperty("email", data.email)
            }
            onPasswordMessage={this.handlePasswordMessage}
            error={errors.email}
          />
          <Input
            name="password"
            value={data.password}
            placeholder="Password *"
            onInput={this.handleInput}
            onPropertyValidation={() =>
              this.validateProperty("password", data.password)
            }
            onPasswordMessage={this.handlePasswordMessage}
            error={errors.password}
          />
          <div className={classes}>
            Between 8 and 16 characters containing letters, numbers and symbols
            (! @ # $ % ^ & *)
          </div>
          <Input
            name="confirmedPassword"
            value={data.confirmedPassword}
            placeholder="Confirm Password *"
            onInput={this.handleInput}
            onPropertyValidation={() =>
              this.validateProperty("confirmedPassword", data.confirmedPassword)
            }
            onPasswordMessage={this.handlePasswordMessage}
            error={errors.confirmedPassword}
          />
          <button className={styles.button}>Enter</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
