import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterDropdownContext } from "./../../../contexts/FilterDropdownContext";
import styles from "./dropdown-filter.module.css";

const DropdownFilter = ({ productTypes }) => {
  const { filterDropdownOpen, handleFilterDropdown } = useContext(
    FilterDropdownContext
  );

  let classes = styles.dropdown;
  if (filterDropdownOpen) classes = styles.openDropdown;

  return (
    <div className={styles.select}>
      <div className={classes} onClick={handleFilterDropdown}>
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
              onClick={handleFilterDropdown}
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
