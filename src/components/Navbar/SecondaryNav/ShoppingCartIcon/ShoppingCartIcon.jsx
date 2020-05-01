import React from "react";
import styles from "./shopping-cart-icon.module.css";

const SecondaryNav = ({ cart, onShoppingCartClick }) => {
  return (
    <div onClick={onShoppingCartClick} className="icon">
      {cart.length > 0 && (
        <div className={styles.numberOfItems}>
          {cart.reduce((acc, item) => acc + item.count, 0)}
        </div>
      )}
      <i className="fas fa-shopping-bag fa-lg"></i>
    </div>
  );
};

export default SecondaryNav;
