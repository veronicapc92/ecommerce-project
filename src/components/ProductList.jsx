import React, { Component } from "react";
import fonts from "./assets/css/fonts.css";
import NavBar from "./Navbar/Navbar";
import styles from "./product-list.module.css";
import axios from "axios";

const products = [
  "https://i.postimg.cc/5tBNTgNC/blue-pants.png",
  "https://i.postimg.cc/66j6kywY/grey-jean.png",
  "https://i.postimg.cc/NMbGf0XG/pink-blazer.png",
  "https://i.postimg.cc/K8gYrF6Q/pink-hoodie.png",
  "https://i.postimg.cc/LXm6pPn0/red-dress.png",
  "https://i.postimg.cc/1XtmgZ0G/squares-shirt.png",
  "https://i.postimg.cc/90nWZN1v/white-tshirt.png",
  "https://i.postimg.cc/xTXjnn1Y/yellow-cardigan.png",
  "https://i.postimg.cc/2SvzLGWK/yellow-skirt.png",
];

class ProductList extends Component {
  state = { productData: [] };

  async componentDidMount() {
    const { data: productData } = await axios.get(
      "http://localhost:8000/clothes"
    );
    this.setState({ productData });
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.filterContainer}>Filter</div>
          <div className={styles.imagesContainer}>
            {this.state.productData.map((product) => (
              <div className={styles.individualImageContainer}>
                <img className={styles.productImage} src={product.link} />
                <div className={styles.productInfo}>
                  <div className={styles.productDescription}>
                    {product.name}
                  </div>
                  <div className={styles.likeButton}>Like</div>
                  <div
                    className={styles.productDescription}
                  >{`£${product.price}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
