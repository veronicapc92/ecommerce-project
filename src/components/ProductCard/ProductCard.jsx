import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Like from "../Like/Like";
import { CartContext } from "./../../contexts/CartContext";
import { ProductsContext } from "./../../contexts/ProductsContext";
import styles from "./product-card.module.css";

const ProductCard = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link to={`/products/${product.productRoute}`}>
          <img className={styles.image} src={product.link} alt={product.name} />
        </Link>
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
