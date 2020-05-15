import React, { useState } from "react";
import Input from "../Input/Input";
import Joi from "@hapi/joi";
import { register } from "../../services/userService";
import styles from "./register.module.css";

function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  let [focusOn, setFocus] = useState(false);

  const schema = Joi.object({
    name: Joi.string().required().alphanum().label("Name"),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,16})"))
      .label("Password"),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const errorsObject = validate();

    console.log("errorsObject", errorsObject);

    setErrors(() => {
      if (errorsObject)
        return {
          name: errorsObject.name,
          email: errorsObject.email,
          password: errorsObject.password,
        };
      // else return {};
    });

    if (errorsObject) return;

    try {
      const response = await register(data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location.reload();
    } catch (ex) {
      setErrors((prevErrors) => {
        if (ex.response && ex.response.status === 400)
          return { ...prevErrors, email: "This email already exists" };
      });
    }
  }

  function validate() {
    const options = { abortEarly: false };
    const { error } = schema.validate(data, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      if (item.message.includes("E-mail"))
        errors[item.path[0]] = "Please enter a valid e-mail address";
      if (item.message.includes("Password"))
        errors[item.path[0]] = "Please enter a valid password";
      if (item.message.includes("empty"))
        errors[item.path[0]] = "This field is required";
    }

    console.log("errors from validate()", errors);
    return errors;
  }

  function validateProperty(name, value) {
    const obj = { [name]: value };
    const localSchema = Joi.object({ [name]: schema.extract(name) });
    const { error } = localSchema.validate(obj);

    setErrors((prevErrors) => {
      if (!error) {
        return { ...prevErrors, [name]: undefined };
      }

      if (error.details[0].message.includes("E-mail"))
        return { ...prevErrors, [name]: "Please enter a valid e-mail address" };
      if (error.details[0].message.includes("Password"))
        return { ...prevErrors, [name]: "Please enter a valid password" };
      if (error.details[0].message.includes("empty"))
        return { ...prevErrors, [name]: "This field is required" };
    });
  }

  function handleInput({ currentTarget: input }) {
    setData((prevData) => {
      return { ...prevData, [input.name]: input.value };
    });
  }

  function handlePasswordMessage({ currentTarget: input }) {
    setFocus(() => {
      if (input.name === "password") return (focusOn = true);
      else focusOn = false;
    });
  }

  let classes = styles.passwordMessageOn;
  if (!focusOn) classes = styles.passwordMessageOff;

  return (
    <React.Fragment>
      <h1 className={styles.headline}>Register</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="name"
          value={data.name}
          placeholder="Name *"
          onInput={handleInput}
          onPropertyValidation={() => validateProperty("name", data.name)}
          error={errors.name}
        />
        <Input
          name="email"
          value={data.email}
          placeholder="Email *"
          onInput={handleInput}
          onPropertyValidation={() => validateProperty("email", data.email)}
          error={errors.email}
        />
        <Input
          name="password"
          value={data.password}
          placeholder="Password *"
          onInput={handleInput}
          onPropertyValidation={() =>
            validateProperty("password", data.password)
          }
          onPasswordMessage={handlePasswordMessage}
          error={errors.password}
        />
        <div className={classes}>
          Between 8 and 16 characters containing letters, numbers and symbols (!
          @ # $ % ^ & *)
        </div>
        <button className={styles.button}>Enter</button>
      </form>
    </React.Fragment>
  );
}

export default Register;
