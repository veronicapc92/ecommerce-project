import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";
import logo from "./assets/gosha_transparent.png";
import styles from "./main-nav.module.css";

const MainNav = ({ onDrawerToggleClick }) => {
  return (
    <div className={styles.mainNav}>
      <div className={styles.toggleButtonContainer}>
        <DrawerToggleButton onDrawerToggleClick={onDrawerToggleClick} />
      </div>
      <div>
        <NavLink to="/">
          <img alt="logo" src={logo} className={styles.logo} />
        </NavLink>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li className={styles.option}>New</li>
          <li className={styles.dropdown}>
            <a className={styles.option} href="/women">
              Women
            </a>
            <div className={styles.dropdownMenu}>
              <DropdownMenu />
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
