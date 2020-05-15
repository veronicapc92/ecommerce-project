import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdown-filter.module.css";

const DropdownFilter = ({
  filterDropdownOpen,
  productTypes,
  onFilterDropdown,
}) => {
  let classes = styles.dropdown;
  if (filterDropdownOpen) classes = styles.openDropdown;

  return (
    <div className={styles.select}>
      <div className={classes} onClick={onFilterDropdown}>
        <span>Products</span>
        {!filterDropdownOpen && <i className="fas fa-chevron-down fa-sm"></i>}
        {filterDropdownOpen && <i className="fas fa-chevron-up fa-sm"></i>}
      </div>
      {filterDropdownOpen && (
        <div className={styles.dropdownContainer}>
          {productTypes.map((productType) => (
            <Link
              className={styles.link}
              to={`/women/${productType.route}`}
              onClick={onFilterDropdown}
            >
              <div key={productType} className={styles.option}>
                {productType.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
