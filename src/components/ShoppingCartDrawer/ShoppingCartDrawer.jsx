import React, { useContext } from "react";
import EmptyShoppingCart from "./EmptyShoppingCart/EmptyShoppingCart";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { CartContext } from "./../../contexts/CartContext";
import "./ShoppingCartDrawer.css";

const ShoppingCartDrawer = ({ show, onCloseShoppingCart }) => {
  const { cart } = useContext(CartContext);

  let classes = "shopping-cart-container";
  if (show) classes = "shopping-cart-container open";

  return (
    <div className={classes}>
      <div className="close-shopping-cart-icon" onClick={onCloseShoppingCart}>
        ×
      </div>
      {cart.length === 0 && <EmptyShoppingCart />}
      {cart.length > 0 && <ShoppingCart />}
    </div>
  );
};

export default ShoppingCartDrawer;
