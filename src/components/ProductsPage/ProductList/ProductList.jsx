import React, { useContext } from "react";
import styles from "./product-list.module.css";
import { ProductTypesContext } from "../../../contexts/ProductTypesContext";

const ProductList = () => {
  const { productTypes } = useContext(ProductTypesContext);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {productTypes.map((productType) => (
          <li className={styles.productType} key={productType.name}>
            <a href={`/women/${productType.route}`}>{productType.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
