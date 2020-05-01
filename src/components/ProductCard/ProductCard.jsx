import React from "react";
import Like from "./Like/Like";
import "../assets/css/fonts.css";
import styles from "./product-card.module.css";

const ProductCard = ({ product, onLike, onAddToCart }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.link} alt={product.name} />
        <div className={styles.drawer}>
          <div>Select size</div>
          <div className={styles.sizes}>
            {sizes.map((size) => (
              <div
                className={styles.size}
                key={size}
                onClick={() => onAddToCart(product, size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.likeButton}>
          <Like product={product} onLike={onLike} />
        </div>
        <div>{`£${product.price}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
