import React, { useContext } from "react";
import EmptyShoppingCart from "./EmptyShoppingCart/EmptyShoppingCart";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { CartContext } from "../../contexts/CartContext";
import "./ShoppingCartDrawer.css";

function ShoppingCartDrawer(props) {
  const { cartDrawerOpen, cart, setCartDrawerState } = useContext(CartContext);

  let classes = "shopping-cart-container";
  if (cartDrawerOpen) classes = "shopping-cart-container open";

  return (
    <div>
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
    </div>
  );
}

export default ShoppingCartDrawer;
