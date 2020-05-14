import React from "react";
import ProductCard from "../../ProductCard/ProductCard";

const ProductCards = ({ filteredProducts, onLike, onAddToCart }) => {
  return (
    <React.Fragment>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onLike={onLike}
          onAddToCart={onAddToCart}
        />
      ))}
    </React.Fragment>
  );
};

export default ProductCards;
