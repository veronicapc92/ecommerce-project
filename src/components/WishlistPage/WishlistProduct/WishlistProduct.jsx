import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { CartContext } from "../../../contexts/CartContext";
import styles from "./wishlist-product.module.css";

const WishlistProduct = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const { handleDeleteWishlistProduct } = useContext(ProductsContext);
  const { handleAddToCart } = useContext(CartContext);
  let [addToCartClicked, setAddToCart] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {product.productRoute === "cigarette-trousers" ? (
          <Link to={`/products/${product.productRoute}`}>
            <img
              className={styles.image}
              src={product.link}
              alt={product.name}
            />
          </Link>
        ) : (
          <img
            className={styles.notClickableImage}
            src={product.link}
            alt={product.name}
          />
        )}
        <button
          className={styles.close}
          onClick={() => handleDeleteWishlistProduct(product)}
        >
          ×
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>{`£${product.price}`}</p>
      </div>
      {!addToCartClicked && (
        <button className={styles.button} onClick={() => setAddToCart(true)}>
          Add to cart
        </button>
      )}
      {addToCartClicked && (
        <div className={styles.sizesContainer}>
          {sizes.map((size) => (
            <button
              key={size}
              className={styles.sizeButton}
              onClick={() => {
                handleAddToCart(product, size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistProduct;
