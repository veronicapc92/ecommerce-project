import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./secondary-nav.module.css";
import SignOut from "../../hooks/SignOut/SignOut";
import AuthDrawer from "../../hooks/AuthDrawer/AuthDrawer";
import ShoppingCartDrawer from "../ShoppingCartDrawer/ShoppingCartDrawer";

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
          {/* <ShoppingCartIcon onShoppingCartClick={onShoppingCartClick} /> */}
          <ShoppingCartDrawer />
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNav;
