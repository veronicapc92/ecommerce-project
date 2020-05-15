import React from "react";
import Register from "../../hooks/Register/Register";
import SignIn from "./SignIn/SignIn";
import styles from "./auth-drawer.module.css";

const AuthDrawer = ({
  show,
  registerDrawerOpen,
  onXButtonClick,
  onRegisterSpanClick,
  onEnterButtonClick,
}) => {
  let classes = show ? styles.containerOpen : styles.containerClosed;

  return (
    <div className={classes}>
      <div className={styles.closeIcon} onClick={onXButtonClick}>
        ×
      </div>
      {registerDrawerOpen && <Register />}
      {!registerDrawerOpen && (
        <SignIn
          onRegisterSpanClick={onRegisterSpanClick}
          onEnterButtonClick={onEnterButtonClick}
        />
      )}
    </div>
  );
};

export default AuthDrawer;
