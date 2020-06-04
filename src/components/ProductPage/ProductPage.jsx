import React, { useContext } from "react";
import Like from "../shared/Like/Like";
import SelectMenu from "./SelectMenu/SelectMenu";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./product-page.module.css";

const ProductPage = ({ match }) => {
  const { products } = useContext(ProductsContext);

  //Finding the product to display by looking at the route in the browser
  let product = products.find(
    (p) => p.productRoute === match.params.productRoute
  );
  product = { ...product };

  return (
    <div className={styles.mainContainer}>
      <img src={product.link} alt="1" className={styles.image1} />
      <img src={product.secondLink} alt="2" className={styles.image2} />
      <div className={styles.container}>
        <div className={styles.h1Container}>
          <h1 className={styles.heading1}>{product.name}</h1>
          <Like product={product} />
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
        <SelectMenu product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
