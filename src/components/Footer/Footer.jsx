import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className="fab fa-facebook-f fa-lg"></i>
      </div>
      <div className={styles.icon}>
        <i className="fab fa-twitter fa-lg"></i>
      </div>
      <div className={styles.icon}>
        <i className="fab fa-instagram fa-lg"></i>
      </div>
      <div className={styles.icon}>
        <i className="fab fa-youtube fa-lg"></i>
      </div>
      <div className={styles.icon}>
        <i className="fab fa-pinterest-p fa-lg"></i>
      </div>
    </div>
  );
};

export default Footer;
