import React, { useState, useContext } from "react";
import Like from "../../components/Like/Like";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import { CartContext } from "./../../contexts/CartContext";
import { ProductsContext } from "./../../contexts/ProductsContext";
import styles from "./product-page.module.css";

function ProductPage({ match }) {
  const { products } = useContext(ProductsContext);
  const { handleAddToCart } = useContext(CartContext);

  let [dropdownOpen, setDropdownState] = useState(false);
  let [size, setSize] = useState("Choose your size");

  function handleSizeChoice(size) {
    setSize(size);
    setDropdownState(false);
  }

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
        <SelectMenu
          dropdownOpen={dropdownOpen}
          size={size}
          onDropdown={() => setDropdownState((prevState) => !prevState)}
          onSizeChoice={handleSizeChoice}
        />
        {size === "Choose your size" ? (
          <button
            className={styles.button}
            onClick={() => setDropdownState((prevState) => !prevState)}
          >
            Add to cart
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => handleAddToCart(product, size)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
