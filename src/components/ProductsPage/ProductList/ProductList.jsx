import React, { useContext } from "react";
import styles from "./product-list.module.css";
import { ProductTypesContext } from "../../../contexts/ProductTypesContext";

const ProductList = () => {
  const { productTypes } = useContext(ProductTypesContext);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {/* Instead of hardcoding the product list, we take the productTypes array,
          map it and display each element inside of a <Link> tag*/}
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
