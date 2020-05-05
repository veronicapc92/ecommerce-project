import React, { Component } from "react";
import Input from "../../Input/Input";
import Joi from "@hapi/joi";
import { login } from "../../../services/authService";
import styles from "./sign-in.module.css";

class SignIn extends Component {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string().required().min(6).max(16).label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const schema = Joi.object(this.schema);
    const { error } = schema.validate(this.state.data, options);

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

    try {
      const { email, password } = this.state.data;
      const { data: jwt } = await login(email, password);
      localStorage.setItem("token", jwt);
      window.location.reload();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  // validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const localSchema = Joi.object({ [name]: this.schema[name] });
  //   const { error } = localSchema.validate(obj);
  //   return error ? error.details[0].message : null;
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
        <h1 className={styles.headline}>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.email}
            name="email"
            placeholder="E-mail *"
            onInput={this.handleInput}
            error={errors.email}
          />
          <Input
            value={data.password}
            name="password"
            placeholder="Password *"
            onInput={this.handleInput}
            error={errors.password}
          />
          <button className={styles.button}>Enter</button>
        </form>
        <p className={styles.registerParagraph}>
          Don't have an account?{" "}
          <span
            className={styles.registerSpan}
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
