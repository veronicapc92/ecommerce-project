import React from "react";
import styles from "./select-menu.module.css";

const SelectMenu = ({ dropdownOpen, size, onSizeChoice, onDropdown }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  let classes = styles.dropdown;
  if (dropdownOpen) classes = styles.openDropdown;

  return (
    <div className={styles.select}>
      <div className={classes} onClick={onDropdown}>
        <span>{size}</span>
        {!dropdownOpen && <i className="fas fa-chevron-down fa-sm"></i>}
        {dropdownOpen && <i className="fas fa-chevron-up fa-sm"></i>}
      </div>
      {dropdownOpen && (
        <div className={styles.dropdownContainer}>
          {sizes.map((size) => (
            <div
              key={size}
              className={styles.option}
              onClick={() => onSizeChoice(size)}
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
