import React from "react";
import Register from "../../hooks/Register/Register";
import SignIn from "../../hooks/SignIn/SignIn";
import styles from "./auth-drawer.module.css";
import { useClickOutside } from "./../../hooks/useClickOutside";

// const AuthDrawer = ({
//   show,
//   registerDrawerOpen,
//   onXButtonClick,
//   onRegisterSpanClick,
//   onEnterButtonClick,
// }) => {
//   let classes = show ? styles.containerOpen : styles.containerClosed;

//   return (
//     <div className={classes}>
//       <div className={styles.closeIcon} onClick={onXButtonClick}>
//         ×
//       </div>
//       {registerDrawerOpen && <Register />}
//       {!registerDrawerOpen && (
//         <SignIn
//           onRegisterSpanClick={onRegisterSpanClick}
//           onEnterButtonClick={onEnterButtonClick}
//         />
//       )}
//     </div>
//   );
// };

function AuthDrawer(props) {
  const { visible, setVisible, ref } = useClickOutside(false);

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
        {props.registerDrawerOpen && <Register />}
        {!props.registerDrawerOpen && (
          <SignIn
            onRegisterSpanClick={props.onRegisterSpanClick}
            onEnterButtonClick={props.onEnterButtonClick}
          />
        )}
      </div>
    </div>
  );
}

export default AuthDrawer;
