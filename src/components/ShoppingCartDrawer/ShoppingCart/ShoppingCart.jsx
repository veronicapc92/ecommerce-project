import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import styles from "./shopping-cart.module.css";

const ShoppingCart = () => {
  const { cart, handleIncrementQuantity, handleDecrementQuantity } = useContext(
    CartContext
  );

  const totalPricePerItem = cart.map((item) => item.count * item.price);
  const totalPrice = totalPricePerItem.reduce((acc, value) => acc + value, 0);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>
        Your shopping bag ({cart.reduce((acc, item) => acc + item.count, 0)})
      </h1>
      {cart.map((item) => (
        <div key={`${item._id}${item.size}`} className={styles.itemContainer}>
          <img className={styles.image} src={item.link} />
          <div className={styles.details}>
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.size}>Size: {item.size}</p>
            <button
              className={styles.button}
              onClick={() => handleIncrementQuantity(item)}
            >
              +
            </button>
            <span className={styles.quantity}>{item.count}</span>
            <button
              className={styles.button}
              onClick={() => handleDecrementQuantity(item)}
            >
              -
            </button>
            <span className={styles.price}>{`£${(
              Math.round(item.price * item.count * 100) / 100
            ).toFixed(2)}`}</span>
          </div>
        </div>
      ))}
      <div className={styles.checkoutContainer}>
        <div className={styles.totalPriceContainer}>
          <span className={styles.total}>Total price:</span>
          <span className={styles.totalPrice}>
            £{(Math.round(totalPrice * 100) / 100).toFixed(2)}
          </span>
        </div>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
