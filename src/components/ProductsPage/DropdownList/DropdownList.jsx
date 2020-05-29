import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductTypesContext } from "../../../contexts/ProductTypesContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import styles from "./dropdown-list.module.css";

const DropdownList = () => {
  const { productTypes } = useContext(ProductTypesContext);
  const { visible, setVisible, ref } = useClickOutside(false);

  function handleFilterDropdown() {
    setVisible((prevState) => {
      return !prevState;
    });
  }

  let classes = styles.dropdownClosed;
  if (visible) classes = styles.dropdownOpen;

  return (
    <div className={styles.select}>
      <div className={classes} ref={ref} onClick={handleFilterDropdown}>
        <span>Products</span>
        {!visible && <i className="fas fa-chevron-down fa-sm"></i>}
        {visible && <i className="fas fa-chevron-up fa-sm"></i>}
      </div>
      {visible && (
        <div className={styles.dropdownContainer}>
          {productTypes.map((productType) => (
            <Link
              key={productType}
              className={styles.link}
              to={`/women/${productType.route}`}
              onClick={handleFilterDropdown}
            >
              <div className={styles.option}>{productType.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownList;
