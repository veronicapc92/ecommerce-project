import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductCards = ({ filteredProducts, onLike }) => {
  return (
    <React.Fragment>
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} onLike={onLike} />
      ))}
    </React.Fragment>
  );
};

export default ProductCards;
