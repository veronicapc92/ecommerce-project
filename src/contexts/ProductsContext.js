import React, { createContext, useState, useEffect } from "react";
import http from "./../services/httpService";
import config from "./../config.json";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  let [products, setProducts] = useState(() => {
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    async function getProducts() {
      const { data: products } = await http.get(config.apiUrl + "/products");

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
