import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./side-drawer.module.css";

const SideDrawer = ({ show, onCloseNavbar }) => {
  let drawerClasses = show ? styles.sideDrawerOpen : styles.sideDrawerClosed;
  // let drawerClasses = "side-drawer";
  // if (show) {
  //   drawerClasses += " open";
  // }
  return (
    <div className={drawerClasses}>
      <div className={styles.close} onClick={onCloseNavbar}>
        ×
      </div>
      <nav>
        <ul className={styles.options}>
          <li className={styles.option} onClick={onCloseNavbar}>
            New
          </li>
          <li className={styles.option} onClick={onCloseNavbar}>
            <NavLink className={styles.optionLink} to="/women">
              Women
            </NavLink>
          </li>
          <li className={styles.option} onClick={onCloseNavbar}>
            Men
          </li>
          <li className={styles.option} onClick={onCloseNavbar}>
            Kids
          </li>
          <li className={styles.option} onClick={onCloseNavbar}>
            Gōsha Home
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
