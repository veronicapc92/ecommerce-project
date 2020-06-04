import React, { useState, useContext } from "react";
import styles from "./select-menu.module.css";
import { CartContext } from "../../../contexts/CartContext";
import { useClickOutside } from "../../../hooks/useClickOutside";

const SelectMenu = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  let [size, setSize] = useState("Choose your size");
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const { handleAddToCart } = useContext(CartContext);
  //useClickOutside is a custom hook used to manage the visibility of an element
  //and set it to not visible when we click outside of it.
  const { visible, setVisible, ref } = useClickOutside(false);

  //Making the border of the sizes container red if we click the Add to cart button
  //but we haven't chosen any size
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
    //If we haven't chosen any size, addToCartClicked will be set to true, so
    //the border of the sizes container turns red indicating we need
    //to select a size
    setAddToCartClicked(() => {
      if (size === "Choose your size") return true;
    });

    //If we have chosen a size, the item is added to cart
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
