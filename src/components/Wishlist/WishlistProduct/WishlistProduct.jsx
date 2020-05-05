import React from "react";
import styles from "./wishlist-product.module.css";

const WishlistProduct = ({ product, onDeleteWishlistProduct, onAddToCart }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.link} alt={product.name} />
        <button
          className={styles.close}
          onClick={() => onDeleteWishlistProduct(product)}
        >
          ×
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>{`£${product.price}`}</p>
      </div>
      <button
        className={styles.button}
        onClick={() => onAddToCart(product, product.size)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default WishlistProduct;
