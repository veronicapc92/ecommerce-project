import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import styles from "./product-list.module.css";

const ProductList = ({ productTypes }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {productTypes.map((productType) => (
          <li className={styles.productType} key={productType.name}>
            <Link to={`/women/${productType.route}`}>{productType.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
