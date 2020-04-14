import React from "react";
import ProductCard from "./ProductCard";

const ProductCards = ({ filteredProducts, onLike }) => {
  return (
    <React.Fragment>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onLike={onLike} />
      ))}
    </React.Fragment>
  );
};

export default ProductCards;
