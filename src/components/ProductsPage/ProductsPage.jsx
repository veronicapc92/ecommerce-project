import React from "react";
import ProductList from "../ProductList/ProductList";
import ProductCards from "../ProductCards/ProductCards";
import styles from "./products-page.module.css";

const ProductsPage = ({ products, productTypes, onLike, onAddToCart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <ProductList productTypes={productTypes} />
      </div>
      <div className={styles.products}>
        <ProductCards
          filteredProducts={products}
          onLike={onLike}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
