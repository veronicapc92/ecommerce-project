import React from "react";
import styles from "./sign-out.module.css";
import { useClickOutside } from "../useClickOutside";

function SignOut(props) {
  const { visible, setVisible, ref } = useClickOutside(false);

  function changeVisible() {
    setVisible((prevState) => !prevState);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/";
  }

  return (
    <div className={styles.container} ref={ref}>
      <i className="fas fa-user-circle fa-lg" onClick={changeVisible}></i>
      {visible && (
        <div className={styles.drawerOpen}>
          <div className={styles.option1}>My details</div>
          <div className={styles.option2}>Orders</div>
          <button className={styles.button} onClick={handleLogout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default SignOut;
