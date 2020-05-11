import React, { Component } from "react";
import styles from "./wishlist-product.module.css";

class WishlistProduct extends Component {
  state = { addToCartClicked: false };

  handleAddToCart = () => {
    this.setState({ addToCartClicked: true });
  };

  render() {
    const sizes = ["XS", "S", "M", "L", "XL"];

    const { product, onDeleteWishlistProduct, onAddToCart } = this.props;
    const { addToCartClicked } = this.state;

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
        {!addToCartClicked && (
          <button className={styles.button} onClick={this.handleAddToCart}>
            Add to cart
          </button>
        )}
        {addToCartClicked && (
          <div className={styles.sizesContainer}>
            {sizes.map((size) => (
              <button
                className={styles.sizeButton}
                onClick={() => {
                  onAddToCart(product, size);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default WishlistProduct;
