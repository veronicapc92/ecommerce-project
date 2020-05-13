import React, { Component } from "react";
import Input from "../../Input/Input";
import Joi from "@hapi/joi";
import { login } from "../../../services/authService";
import styles from "./sign-in.module.css";

class SignIn extends Component {
  // state = {
  //   data: { email: "", password: "" },
  //   errors: {},
  // };

  // schema = Joi.object({
  //   email: Joi.string()
  //     .required()
  //     .email({ tlds: { allow: false } })
  //     .label("E-mail"),
  //   password: Joi.string().required().label("Password"),
  // });

  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const errors = this.validate();
  //   this.setState({ errors: errors || {} });
  //   if (errors) return;

  //   try {
  //     const { email, password } = this.state.data;
  //     const { data: jwt } = await login(email, password);
  //     localStorage.setItem("token", jwt);
  //     window.location.reload();
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.email = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };

  // validate = () => {
  //   const options = { abortEarly: false };
  //   const { error } = this.schema.validate(this.state.data, options);

  //   if (!error) return null;

  //   const errors = {};
  //   for (let item of error.details) {
  //     if (item.message.includes("E-mail"))
  //       errors[item.path[0]] = "Please enter a valid e-mail address";
  //     if (item.message.includes("empty"))
  //       errors[item.path[0]] = "This field is required";
  //   }

  //   return errors;
  // };

  // validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const schema = Joi.object({ [name]: this.schema.extract(name) });
  //   const { error } = schema.validate(obj);

  //   if (!error) return null;

  //   if (error.details[0].message.includes("empty"))
  //     return "This field is required";
  //   if (error.details[0].message.includes("E-mail"))
  //     return "Please enter a valid e-mail address";
  // };

  // handleInput = ({ currentTarget: input }) => {
  //   const errors = { ...this.state.errors };
  //   const errorMessage = this.validateProperty(input);
  //   if (errorMessage) errors[input.name] = errorMessage;
  //   else delete errors[input.name];

  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;

  //   this.setState({ data, errors });
  // };

  // render() {
  //   const { data, errors } = this.state;
  //   return (
  //     <React.Fragment>
  //       <h1 className={styles.headline}>Sign In</h1>
  //       <form onSubmit={this.handleSubmit}>
  //         <Input
  //           name="email"
  //           value={data.email}
  //           placeholder="E-mail *"
  //           onInput={this.handleInput}
  //           onPropertyValidation={this.handleInput}
  //           error={errors.email}
  //         />
  //         <Input
  //           name="password"
  //           value={data.password}
  //           placeholder="Password *"
  //           onInput={this.handleInput}
  //           onPropertyValidation={this.handleInput}
  //           error={errors.password}
  //         />
  //         <button className={styles.button}>Enter</button>
  //       </form>
  //       <p className={styles.registerParagraph}>
  //         Don't have an account?{" "}
  //         <span
  //           className={styles.registerSpan}
  //           onClick={this.props.onRegisterSpanClick}
  //         >
  //           Register
  //         </span>
  //       </p>
  //     </React.Fragment>

  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string().required().label("Password"),
  });

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

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      if (item.message.includes("E-mail"))
        errors[item.path[0]] = "Please enter a valid e-mail address";
      if (item.message.includes("empty"))
        errors[item.path[0]] = "This field is required";
    }

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

  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <h1 className={styles.headline}>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={data.email}
            placeholder="E-mail *"
            onInput={this.handleInput}
            onPropertyValidation={() =>
              this.validateProperty("email", data.email)
            }
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
