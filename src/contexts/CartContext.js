import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  let [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });
  let [addToCartClicked, setAddToCart] = useState(false);
  let [cartDrawerOpen, setCartDrawerState] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(product, size) {
    setCart((prevState) => {
      const cart = [...prevState];
      const index = cart.findIndex(
        (item) => item._id === product._id && item.size === size
      );

      if (index >= 0) {
        cart[index] = { ...prevState[index] };
        cart[index].count++;
      } else
        cart.push({
          _id: product._id,
          name: product.name,
          link: product.link,
          price: product.price,
          size,
          count: 1,
        });

      return cart;
    });

    setAddToCart(true);
  }

  function handleIncrementQuantity(item) {
    setCart((prevState) => {
      const cart = [...prevState];
      const index = cart.findIndex(
        (i) => i._id === item._id && i.size === item.size
      );
      cart[index] = { ...item };
      cart[index].count++;
      return cart;
    });
  }

  function handleDecrementQuantity(item) {
    setCart((prevState) => {
      const cart = [...prevState];
      const index = cart.findIndex(
        (i) => i._id === item._id && i.size === item.size
      );
      cart[index] = { ...item };

      if (cart[index].count > 1) cart[index].count--;
      else cart.splice(cart[index], 1);

      return cart;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartDrawerOpen,
        cart,
        addToCartClicked,
        setCartDrawerState,
        setAddToCart,
        handleAddToCart,
        handleIncrementQuantity,
        handleDecrementQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
