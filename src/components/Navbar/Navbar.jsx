import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import fonts from "../assets/css/fonts.css";
import styles from "./navbar.module.css";
import logo from "../assets/photos/gosha_transparent.png";

const NavBar = ({ onDrawerToggleClick }) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.mainNav}>
          <div className={styles.toggleButtonContainer}>
            <DrawerToggleButton click={onDrawerToggleClick} />
          </div>
          <div className={styles.logoContainer}>
            <a href="">
              <img alt="logo" src={logo} />
            </a>
          </div>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <a className={styles.navbarLinks} href="">
                  New
                </a>
              </li>
              <li>
                <a className={styles.navbarLinks} href="">
                  Ladies
                </a>
              </li>
              <li>
                {" "}
                <a className={styles.navbarLinks} href="">
                  Men
                </a>
              </li>
              <li>
                {" "}
                <a className={styles.navbarLinks} href="">
                  Kids
                </a>
              </li>
              <li>
                {" "}
                <a className={styles.navbarLinks} href="">
                  Gōsha Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className={styles.secondaryNav}>
          <ul>
            <li>
              <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
