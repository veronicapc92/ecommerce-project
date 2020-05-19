import React, { useContext } from "react";
import Like from "../Like/Like";
import { CartContext } from "./../../contexts/CartContext";
import styles from "./product-card.module.css";

const ProductCard = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {product.productRoute === "cigarette-trousers" ? (
          <a
            className={styles.imageLink}
            href={`/products/${product.productRoute}`}
          >
            <img
              className={styles.image}
              src={product.link}
              alt={product.name}
            />
          </a>
        ) : (
          <img className={styles.image} src={product.link} alt={product.name} />
        )}
        <div className={styles.drawer}>
          <div>Select size</div>
          <div className={styles.sizes}>
            {sizes.map((size) => (
              <div
                className={styles.size}
                key={size}
                onClick={() => handleAddToCart(product, size)}
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
          <Like product={product} />
        </div>
        <div className={styles.price}>{`£${product.price}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
