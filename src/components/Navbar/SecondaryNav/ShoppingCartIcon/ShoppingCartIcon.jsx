import React from "react";
import styles from "./shopping-cart-icon.module.css";

const SecondaryNav = ({
  cart,
  addToCartClicked,
  onShoppingCartClick,
  onAnimation,
}) => {
  let classes = addToCartClicked ? styles.itemAdded : styles.numberOfItems;

  return (
    <div
      className={styles.iconContainer}
      onClick={onShoppingCartClick}
      onAnimationEnd={onAnimation}
    >
      {cart.length > 0 && (
        <div className={classes}>
          {cart.reduce((acc, item) => acc + item.count, 0)}
        </div>
      )}
      <i className="fas fa-shopping-bag fa-lg"></i>
    </div>
  );
};

export default SecondaryNav;
