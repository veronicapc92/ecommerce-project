import React from "react";
import { Link } from "react-router-dom";
import shoppingBagImage from "./assets/shopping-bag-bw.png";
import styles from "./empty-shopping-cart.module.css";

const EmptyShoppingCart = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={shoppingBagImage} />
      <h1 className={styles.message}>Your shopping bag is empty.</h1>
      <p>Fill it with with your favourite items from our collection!</p>
      <Link to="/women">
        <button className={styles.button}>See collection</button>
      </Link>
    </div>
  );
};

export default EmptyShoppingCart;
