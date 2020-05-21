import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "../../ShoppingCartIcon/ShoppingCartIcon";
import "../../assets/css/fonts.css";
import styles from "./secondary-nav.module.css";
import SignOut from "../../SignOut/SignOut";
import AuthDrawer from "./../../AuthDrawer/AuthDrawer";

const SecondaryNav = ({ user, onShoppingCartClick }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {!user.name && (
          <li className={styles.option}>
            <AuthDrawer />
          </li>
        )}
        {user.name && (
          <li className={styles.option}>
            <SignOut />
          </li>
        )}
        <li>
          <NavLink to="/wishlist" className={styles.option}>
            <i className="far fa-heart fa-lg"></i>
          </NavLink>
        </li>
        <li className={styles.option}>
          <ShoppingCartIcon onShoppingCartClick={onShoppingCartClick} />
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNav;
