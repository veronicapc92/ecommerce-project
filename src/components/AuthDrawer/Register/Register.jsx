import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import { register } from "../../../services/userService";
import styles from "./register.module.css";

const Register = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("This field is required."),
        password: Yup.string().required("This field is required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await register(values);
          localStorage.setItem("token", response.headers["x-auth-token"]);
          window.location.reload();
        } catch (ex) {
          console.log(ex);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>Register</h1>
          <Input name="name" placeholder="Name *" />
          <Input name="email" placeholder="Email *" />
          <Input name="password" placeholder="Password *" />
          <button className={styles.button} disabled={isSubmitting}>
            Enter
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
