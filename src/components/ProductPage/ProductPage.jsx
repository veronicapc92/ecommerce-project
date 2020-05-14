import React, { Component } from "react";
import Like from "../ProductCard/Like/Like";
import SelectMenu from "./SelectMenu/SelectMenu";
import styles from "./product-page.module.css";

class ProductPage extends Component {
  state = { dropdownOpen: false, size: "Choose your size" };

  handleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  handleSizeChoice = (size) => {
    this.setState({ size, dropdownOpen: false });
  };

  render() {
    const { dropdownOpen, size } = this.state;
    const { products, match, onLike, onAddToCart } = this.props;
    let product = products.find(
      (p) => p.productRoute === match.params.productRoute
    );
    product = { ...product };

    return (
      <div className={styles.mainContainer}>
        {/* <div className={images}></div> */}
        <img src={product.link} className={styles.image1} />
        <img src={product.secondLink} className={styles.image2} />
        <div className={styles.container}>
          <div className={styles.h1Container}>
            <h1 className={styles.heading1}>{product.name}</h1>
            <Like product={product} onLike={onLike} />
          </div>
          <div className={styles.h2Container}>
            <h2 className={styles.heading2}>{`£${product.price}`}</h2>
          </div>
          <div className={styles.colorsContainer}>
            <div className={styles.blueContainer}>
              <div className={styles.blue}></div>
            </div>
            <div className={styles.green}></div>
            <div className={styles.red}></div>
          </div>
          <div className={styles.fakeLinkContainer}>Discover your size</div>
          <SelectMenu
            dropdownOpen={dropdownOpen}
            size={size}
            onDropdown={this.handleDropdown}
            onSizeChoice={this.handleSizeChoice}
          />
          {this.state.size === "Choose your size" ? (
            <button className={styles.button} onClick={this.handleDropdown}>
              Add to cart
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => onAddToCart(product, size)}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ProductPage;
