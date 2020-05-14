import React from "react";
import styles from "./sign-out.module.css";

const SignOut = ({ signOutDrawerOpen }) => {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/";
  }

  let classes = signOutDrawerOpen ? styles.drawerOpen : styles.drawerClosed;

  return (
    <div className={classes}>
      <div className={styles.option1}>My details</div>
      <div className={styles.option2}>Orders</div>
      <button className={styles.button} onClick={handleLogout}>
        Sign out
      </button>
    </div>
  );
};

export default SignOut;
