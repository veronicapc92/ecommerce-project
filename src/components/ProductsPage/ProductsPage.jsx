import React from "react";
import ProductList from "../ProductList/ProductList";
import ProductCards from "../ProductCards/ProductCards";
import styles from "./products-page.module.css";

const ProductsPage = ({
  products,
  productTypes,
  onLike,
  onAddToCart,
  match,
}) => {
  let filteredProducts = products;

  if (match.params.route !== undefined) {
    filteredProducts = products.filter((p) => p.type === match.params.route);
  }

  console.log(match.params.route);

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <ProductList productTypes={productTypes} />
      </div>
      <div className={styles.products}>
        <ProductCards
          filteredProducts={filteredProducts}
          onLike={onLike}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
