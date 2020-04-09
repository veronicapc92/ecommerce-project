import React from "react";
import styles from "./drawer-toggle-button.module.css";

const DrawerToggleButton = ({ click }) => {
  return (
    <button onClick={click} className={styles.toggleButton}>
      <div className={styles.toggleButtonLine}></div>
      <div className={styles.toggleButtonLine}></div>
      <div className={styles.toggleButtonLine}></div>
    </button>
  );
};

export default DrawerToggleButton;
