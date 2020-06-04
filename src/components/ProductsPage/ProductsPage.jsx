import React, { useContext } from "react";
import ProductList from "./ProductList/ProductList";
import ProductCards from "./ProductCards/ProductCards";
import DropdownList from "./DropdownList/DropdownList";
import { ProductsContext } from "./../../contexts/ProductsContext";
import styles from "./products-page.module.css";

const ProductsPage = ({ match }) => {
  const { products } = useContext(ProductsContext);

  let filteredProducts = products;

  //Filtering the products to display by looking at the route in the browser
  if (match.params.route !== undefined) {
    filteredProducts = products.filter((p) => p.type === match.params.route);
  }

  return (
    <div className={styles.container}>
      {/* ProductList is visible when screen size > 900px */}
      <div className={styles.filterContainer}>
        <ProductList />
      </div>
      {/* DropdownList is visible when screen size < 900px */}
      <div className={styles.dropdownFilter}>
        <DropdownList />
      </div>
      <div className={styles.products}>
        <ProductCards filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
