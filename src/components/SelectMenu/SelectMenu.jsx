import React, { Component } from "react";
import styles from "./select-menu.module.css";

class SelectMenu extends Component {
  render() {
    const { dropdownOpen, size, onSizeChoice, onDropdown } = this.props;
    const sizes = ["XS", "S", "M", "L", "XL"];

    return (
      <div className={styles.select}>
        <div className={styles.dropdown} onClick={onDropdown}>
          <span>{size}</span>
          <i class="fas fa-chevron-down fa-sm"></i>
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
  }
}

export default SelectMenu;
