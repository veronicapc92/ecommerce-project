import React, { useState, useContext } from "react";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import styles from "./auth-drawer.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";

function AuthDrawer(props) {
  const { visible, setVisible, ref } = useClickOutside(false);
  const [registerDrawerOpen, setRegisterDrawerState] = useState(false);

  function changeVisible() {
    setVisible((prevState) => !prevState);
  }

  let classes = visible ? styles.containerOpen : styles.containerClosed;
  return (
    <div ref={ref}>
      <i className="fas fa-user-circle fa-lg" onClick={changeVisible}></i>
      <div className={classes}>
        <div className={styles.closeIcon} onClick={() => setVisible(false)}>
          ×
        </div>
        {registerDrawerOpen && <Register />}
        {!registerDrawerOpen && (
          <SignIn
            registerDrawerOpen={registerDrawerOpen}
            setRegisterDrawerState={setRegisterDrawerState}
          />
        )}
      </div>
    </div>
  );
}

export default AuthDrawer;
