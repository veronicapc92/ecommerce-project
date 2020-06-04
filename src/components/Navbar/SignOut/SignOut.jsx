import React from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import styles from "./sign-out.module.css";

const SignOut = () => {
  //useClickOutside is a custom hook used to manage the visibility of an element
  //and set it to not visible when we click outside of it.
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
};

export default SignOut;
