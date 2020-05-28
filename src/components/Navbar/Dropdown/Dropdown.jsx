import React, { useContext } from "react";
import { ProductTypesContext } from "../../../contexts/ProductTypesContext";
import styles from "./dropdown.module.css";

const Menu = () => {
  const { productTypes } = useContext(ProductTypesContext);
  return (
    <div className={styles.menu}>
      <div className={styles.optionsContainer}>
        <div>
          <ul className={styles.options}>
            <li className={styles.option}>New Arrivals</li>
            <li className={styles.option}>Evening dresses</li>
            <li className={styles.option}>Office looks</li>
            <li className={styles.option}>Denim</li>
            <li className={styles.option}>Maternity wear</li>
            <li className={styles.option}>Plus sizes</li>
          </ul>
        </div>
        <div>
          <span className={styles.optionsTitle}>Clothing</span>
          <ul className={styles.activeOptions}>
            {productTypes.map((productType) => {
              return (
                <li key={productType.name} className={styles.option}>
                  <a
                    className={styles.optionLink}
                    href={`/women/${productType.route}`}
                  >
                    {productType.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <span className={styles.optionsTitle}>Accessories</span>
          <ul className={styles.options}>
            <li className={styles.option}>Shoes</li>
            <li className={styles.option}>Jewellery</li>
            <li className={styles.option}>Bags & Wallets</li>
            <li className={styles.option}>Scarves</li>
            <li className={styles.option}>Hats</li>
            <li className={styles.option}>Belts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
