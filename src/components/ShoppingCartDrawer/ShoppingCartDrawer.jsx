import React, { useContext } from "react";
import EmptyShoppingCart from "./EmptyShoppingCart/EmptyShoppingCart";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { CartContext } from "./../../contexts/CartContext";
import "./ShoppingCartDrawer.css";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";

// const ShoppingCartDrawer = ({ show, onCloseShoppingCart }) => {
//   const { cart } = useContext(CartContext);

//   let classes = "shopping-cart-container";
//   if (show) classes = "shopping-cart-container open";

//   return (
//     <div>
//       <ShoppingCartIcon />
//       <div className={classes}>
//         <div className="close-shopping-cart-icon" onClick={onCloseShoppingCart}>
//           ×
//         </div>
//         {cart.length === 0 && <EmptyShoppingCart />}
//         {cart.length > 0 && <ShoppingCart />}
//       </div>
//     </div>
//   );
// };

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
