import React from "react";
import { Link } from "react-router-dom";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Oops!</h1>
      <h2 className={styles.heading2}>404</h2>
      <p className={styles.paragraph}>
        We're sorry, but the page you're looking for doesn't exist
      </p>
      <Link to="/">
        <button className={styles.button}>Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
