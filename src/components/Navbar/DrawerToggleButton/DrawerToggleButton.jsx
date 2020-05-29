import React from "react";
import styles from "./drawer-toggle-button.module.css";

const DrawerToggleButton = ({ onDrawerToggleClick }) => {
  return (
    <button onClick={onDrawerToggleClick} className={styles.toggleButton}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
};

export default DrawerToggleButton;
