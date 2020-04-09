import React from "react";
import styles from "./backdrop.module.css";

const Backdrop = ({ onBackdropClick }) => {
  return <div onClick={onBackdropClick} className={styles.backdrop}></div>;
};

export default Backdrop;
