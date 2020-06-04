import React, { createContext, useState, useEffect } from "react";
import http from "./../services/httpService";

export const ProductsContext = createContext();

// Retrieving the products from the local storage
const ProductsContextProvider = (props) => {
  let [products, setProducts] = useState(() => {
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
  });

  // Every time a key value pair in the products object changes
  // (in this case the only one that can change is products.liked to either true or false),
  // useEffect will check:
  //
  // If there are no products stored in the local storage
  // (this is when we open the site for the first time)
  // then we retrieve them from the database.
  // Otherwise we update the products object in the local storage.
  //
  // This is done so when a product has been liked it will stay in the wishlist
  // even after we have refreshed the page
  useEffect(() => {
    async function getProducts() {
      const { data: products } = await http.get("/products");
      setProducts(products);
    }

    if (products.length === 0) getProducts();
    else localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function handleLike(product) {
    setProducts((prevState) => {
      products = [...prevState];
      const index = products.findIndex((p) => p._id === product._id);
      products[index].liked = !products[index].liked;
      return products;
    });
  }

  function handleDeleteWishlistProduct(product) {
    setProducts((prevState) => {
      products = [...prevState];
      const index = products.indexOf(product);
      products[index] = { ...products[index] };
      products[index].liked = false;
      return products;
    });
  }

  return (
    <ProductsContext.Provider
      value={{ products, handleLike, handleDeleteWishlistProduct }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
