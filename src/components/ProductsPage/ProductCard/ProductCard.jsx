import React, { useState, useContext } from "react";
import Like from "../../shared/Like/Like";
import { CartContext } from "../../../contexts/CartContext";
import styles from "./product-card.module.css";

const ProductCard = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [drawerOpen, setDrawerState] = useState(false);
  const { handleAddToCart } = useContext(CartContext);

  function changeDrawerState() {
    setDrawerState((prevState) => !prevState);
  }

  let classes = drawerOpen ? styles.drawerOpen : styles.drawerClosed;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* Enabling the product page link only for the cigarette trousers image */}
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
        {/* Drawer visible when screen width > 1250px; */}
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
        {/* Drawer visible when screen width < 1250px; */}
        <div className={classes}>
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
        <div className={styles.likeContainer}>
          <Like product={product} />
        </div>
        <div className={styles.price}>{`£${product.price}`}</div>
        {/* Button visible when screen width < 1250px */}
        <button className={styles.addButton} onClick={changeDrawerState}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
