import React, { Component } from "react";
import Like from "../Like/Like";
import styles from "./product-page.module.css";

// const ProductPage = ({ products }) => {
//   console.log(products[0]);
//   return <div>Hello</div>;
// };

// export default ProductPage;

class ProductPage extends Component {
  render() {
    let product = this.props.products.find(
      (p) => p.productRoute === this.props.match.params.productRoute
    );
    product = { ...product };
    return (
      <div className={styles.mainContainer}>
        <img src={product.link} className={styles.image1} />
        <img src={product.secondLink} className={styles.image2} />
        <div className={styles.container}>
          <div className={styles.button}>
            {" "}
            <Like
              className={styles.button}
              product={product}
              onLike={this.props.onLike}
            />
          </div>
          <h1 className={styles.heading1}>{product.name}</h1>
          <h2 className={styles.heading2}>{`£${product.price}`}</h2>
          <select className={styles.dropdown} id="sizes">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ProductPage;
