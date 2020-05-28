import React, { useState, useContext } from "react";
import Joi from "@hapi/joi";
import Input from "../Input/Input";
import { login } from "../../../services/authService";
import styles from "./sign-in.module.css";

function SignIn({ registerDrawerOpen, setRegisterDrawerState }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("E-mail"),
    password: Joi.string().required().label("Password"),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const errorsObject = validate();

    setErrors((...prevErrors) => {
      if (errorsObject)
        return {
          ...prevErrors,
          email: errorsObject.email,
          password: errorsObject.password,
        };
      else return { ...prevErrors };
    });

    if (errorsObject) return;

    try {
      const { email, password } = data;
      const { data: jwt } = await login(email, password);
      localStorage.setItem("token", jwt);
      window.location.reload();
    } catch (ex) {
      setErrors((prevErrors) => {
        if (ex.response && ex.response.status === 400)
          return { ...prevErrors, email: ex.response.data };
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
      if (item.message.includes("empty"))
        errors[item.path[0]] = "This field is required";
    }

    console.log(errors);
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
      if (error.details[0].message.includes("empty"))
        return { ...prevErrors, [name]: "This field is required" };
    });
  }

  function handleInput({ currentTarget: input }) {
    setData((prevData) => {
      return { ...prevData, [input.name]: input.value };
    });
  }

  return (
    <React.Fragment>
      <h1 className={styles.headline}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          value={data.email}
          placeholder="E-mail *"
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
          error={errors.password}
        />
        <button className={styles.button}>Enter</button>
      </form>
      <p className={styles.registerParagraph}>
        Don't have an account?{" "}
        <span
          className={styles.registerSpan}
          onClick={() => setRegisterDrawerState(true)}
        >
          Register
        </span>
      </p>
    </React.Fragment>
  );
}

export default SignIn;
