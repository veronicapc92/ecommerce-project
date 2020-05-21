import React, { useContext } from "react";
import styles from "./shopping-cart-icon.module.css";
import { CartContext } from "../../contexts/CartContext";

const ShoppingCartIcon = ({ onShoppingCartClick }) => {
  const { cart, addToCartClicked, setAddToCart } = useContext(CartContext);

  let classes = addToCartClicked ? styles.itemAdded : styles.numberOfItems;

  return (
    <div
      className={styles.iconContainer}
      onClick={onShoppingCartClick}
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
