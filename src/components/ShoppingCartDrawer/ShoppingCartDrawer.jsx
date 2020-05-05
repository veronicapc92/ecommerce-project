import React from "react";
import EmptyShoppingCart from "./EmptyShoppingCart/EmptyShoppingCart";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./ShoppingCartDrawer.css";

const ShoppingCartDrawer = ({
  show,
  cart,
  onCloseShoppingCart,
  onIncrementQuantity,
  onDecrementQuantity,
}) => {
  let classes = "shopping-cart-container";
  if (show) classes = "shopping-cart-container open";

  return (
    <div className={classes}>
      <div className="close-shopping-cart-icon" onClick={onCloseShoppingCart}>
        ×
      </div>
      {cart.length === 0 && <EmptyShoppingCart />}
      {cart.length > 0 && (
        <ShoppingCart
          cart={cart}
          onIncrementQuantity={onIncrementQuantity}
          onDecrementQuantity={onDecrementQuantity}
        />
      )}
    </div>
  );
};

export default ShoppingCartDrawer;
