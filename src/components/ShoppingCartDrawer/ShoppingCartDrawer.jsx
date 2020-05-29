import React, { useContext } from "react";
import EmptyShoppingCart from "./EmptyShoppingCart/EmptyShoppingCart";
import ShoppingCartIcon from "./ShoppingCartIcon/ShoppingCartIcon";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { CartContext } from "../../contexts/CartContext";
import "./ShoppingCartDrawer.css";

const ShoppingCartDrawer = () => {
  const { cartDrawerOpen, cart, setCartDrawerState } = useContext(CartContext);

  let classes = "shopping-cart-container";
  if (cartDrawerOpen) classes = "shopping-cart-container open";

  return (
    <React.Fragment>
      <ShoppingCartIcon />
      <div className={classes}>
        <div
          className="close-shopping-cart-icon"
          onClick={() => setCartDrawerState(false)}
        >
          ×
        </div>
        {cart.length === 0 && <EmptyShoppingCart />}
        {cart.length > 0 && <ShoppingCart />}
      </div>
    </React.Fragment>
  );
};

export default ShoppingCartDrawer;
