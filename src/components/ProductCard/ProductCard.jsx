import React from "react";
import Like from "../Like/Like";
import "../assets/css/fonts.css";
import "./ProductCard.css";

const ProductCard = ({ product, onLike }) => {
  return (
    <div className="individual-image-container">
      <div className="image-and-add-to-cart-container">
        <img className="product-image" src={product.link} />
        <div className="add-to-cart-drawer">Add to cart</div>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="like-button">
          <Like product={product} onLike={onLike} />
        </div>
        <div>{`£${product.price}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
