import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/fonts.css";
import styles from "./dropdown.module.css";

const Menu = ({ productTypes }) => {
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
          <ul className={styles.options}>
            {productTypes.map((productType) => {
              return (
                <li key={productType.name} className={styles.option}>
                  <NavLink
                    className={styles.optionLink}
                    to={`/women/${productType.route}`}
                  >
                    {productType.name}
                  </NavLink>
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
