import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import styles from "./shopping-cart-icon.module.css";

const ShoppingCartIcon = () => {
  const {
    cart,
    addToCartClicked,
    setCartDrawerState,
    setAddToCart,
  } = useContext(CartContext);

  let classes = addToCartClicked ? styles.itemAdded : styles.numberOfItems;

  return (
    <div
      className={styles.iconContainer}
      onClick={() => setCartDrawerState(true)}
      onAnimationEnd={() => setAddToCart(false)}
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

export default ShoppingCartIcon;
