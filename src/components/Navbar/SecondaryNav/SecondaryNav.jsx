import React from "react";
import { NavLink } from "react-router-dom";
import AuthIcon from "./AuthIcon/AuthIcon";
import LogoutIcon from "./LogoutIcon/LogoutIcon";
import ShoppingCartIcon from "./ShoppingCartIcon/ShoppingCartIcon";
import "../../assets/css/fonts.css";
import styles from "./secondary-nav.module.css";

const SecondaryNav = ({
  user,
  cart,
  addToCartClicked,
  onSignInIconClick,
  onAnimation,
  onSignOutIconClick,
  onShoppingCartClick,
}) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {!user && (
          <li className={styles.option}>
            <AuthIcon onSignInIconClick={onSignInIconClick} />
          </li>
        )}
        {user && (
          <li className={styles.option}>
            <i
              onClick={onSignOutIconClick}
              className="fas fa-user-circle fa-lg"
            ></i>
          </li>
        )}

        <li>
          <NavLink to="/wishlist" className={styles.option}>
            <i className="far fa-heart fa-lg"></i>
          </NavLink>
        </li>
        <li className={styles.option}>
          <ShoppingCartIcon
            cart={cart}
            addToCartClicked={addToCartClicked}
            onAnimation={onAnimation}
            onShoppingCartClick={onShoppingCartClick}
          />
        </li>
        {/* {user && (
          <li className={styles.option}>
            <LogoutIcon />
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export default SecondaryNav;
