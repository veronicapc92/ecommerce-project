import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductCards = ({ filteredProducts }) => {
  return (
    <React.Fragment>
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </React.Fragment>
  );
};

export default ProductCards;
