import React, { useState, useEffect, createContext } from "react";
import http from "../services/httpService";

export const ProductTypesContext = createContext();

const ProductTypesContextProvider = (props) => {
  let [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    async function getProductTypes() {
      const { data } = await http.get("/producttypes");
      const productTypes = [{ name: "View All", id: 0, route: "" }, ...data];

      setProductTypes(productTypes);
    }

    getProductTypes();
  }, []);
  
  return (
    <ProductTypesContext.Provider value={{ productTypes }}>
      {props.children}
    </ProductTypesContext.Provider>
  );
};

export default ProductTypesContextProvider;
