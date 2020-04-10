import React, { Component } from "react";
import ProductCard from "./ProductCard";

const ProductCards = ({ productData }) => {
  return (
    <React.Fragment>
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </React.Fragment>
  );
};

export default ProductCards;
