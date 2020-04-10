import React from "react";
import fonts from "../assets/css/fonts.css";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="individual-image-container">
      <img className="product-image" src={product.link} />
      <div className="product-info">
        <div>{product.name}</div>
        <div className="like-button">Like</div>
        <div>{`£${product.price}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
