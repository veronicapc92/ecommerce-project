import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./../DrawerToggleButton/DrawerToggleButton";
import Dropdown from "../Dropdown/Dropdown";
import logo from "./assets/gosha_transparent.png";
import styles from "./main-nav.module.css";

const MainNav = ({ productTypes, onDrawerToggleClick }) => {
  return (
    <div className={styles.mainNav}>
      <div className={styles.toggleButtonContainer}>
        <DrawerToggleButton click={onDrawerToggleClick} />
      </div>
      <div>
        <NavLink to="/">
          <img alt="logo" src={logo} className={styles.logo} />
        </NavLink>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.option}>New</li>
          <li className={styles.dropdown}>
            <NavLink className={styles.option} to="/women">
              Women
            </NavLink>
            <div className={styles.dropdownMenu}>
              <Dropdown productTypes={productTypes} />
            </div>
          </li>
          <li className={styles.option}>Men</li>
          <li className={styles.option}>Kids</li>
          <li className={styles.option}>Gōsha Decor</li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
