import React from "react";
import MainNav from "./MainNav/MainNav";
import SecondaryNav from "./SecondaryNav/SecondaryNav";
import "../../fonts/fonts.css";
import styles from "./navbar.module.css";

const Navbar = ({ user, onDrawerToggleClick }) => {
  return (
    <header className={styles.header}>
      <MainNav onDrawerToggleClick={onDrawerToggleClick} />
      <div className={styles.wrapper}>
        {user.name && <span className={styles.name}>Hi {user.name}</span>}
        <SecondaryNav user={user} />
      </div>
    </header>
  );
};

export default Navbar;
