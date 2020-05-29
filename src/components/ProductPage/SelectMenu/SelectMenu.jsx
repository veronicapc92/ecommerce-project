import React, { useState, useContext } from "react";
import styles from "./select-menu.module.css";
import { CartContext } from "../../../contexts/CartContext";
import { useClickOutside } from "../../../hooks/useClickOutside";

const SelectMenu = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  let [size, setSize] = useState("Choose your size");
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const { handleAddToCart } = useContext(CartContext);
  const { visible, setVisible, ref } = useClickOutside(false);

  let classes = styles.dropdown;
  if (addToCartClicked && size === "Choose your size" && !visible)
    classes = styles.error;
  else if (visible) classes = styles.openDropdown;

  function changeVisible() {
    setVisible((prevState) => !prevState);
  }

  function handleSizeChoice(size) {
    setSize(size);
    setVisible(false);
  }

  function handleAddToCartClick(product, size) {
    setAddToCartClicked(() => {
      if (size === "Choose your size") return true;
    });

    if (size !== "Choose your size") handleAddToCart(product, size);
  }

  return (
    <div className={styles.select} ref={ref}>
      <div className={classes} onClick={changeVisible}>
        <span>{size}</span>
        {!visible && <i className="fas fa-chevron-down fa-sm"></i>}
        {visible && <i className="fas fa-chevron-up fa-sm"></i>}
      </div>
      {visible && (
        <div className={styles.dropdownContainer}>
          {sizes.map((size) => (
            <div
              key={size}
              className={styles.option}
              onClick={() => handleSizeChoice(size)}
            >
              {size}
            </div>
          ))}
        </div>
      )}
      <button
        className={styles.button}
        onClick={() => handleAddToCartClick(product, size)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default SelectMenu;
