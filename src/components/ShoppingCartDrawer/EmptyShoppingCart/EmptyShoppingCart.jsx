import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import shoppingBagImage from "./assets/shopping-bag-bw.png";
import styles from "./empty-shopping-cart.module.css";

const EmptyShoppingCart = () => {
  const { setCartDrawerState } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img className={styles.image} alt="shopping-bag" src={shoppingBagImage} />
      <h1 className={styles.message}>Your shopping bag is empty.</h1>
      <p>Fill it with with your favourite items from our collection!</p>
      <a href="/women" onClick={() => setCartDrawerState(false)}>
        <button className={styles.button}>See collection</button>
      </a>
    </div>
  );
};

export default EmptyShoppingCart;
