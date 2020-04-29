import React from "react";
import Like from "../Like/Like";
import "../assets/css/fonts.css";
import "./ProductCard.css";

const ProductCard = ({ product, onLike, onAddToCart }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="individual-image-container">
      <div className="image-and-add-to-cart-container">
        <img className="product-image" src={product.link} alt={product.name} />
        <div className="add-to-cart-drawer">
          <div>Select size</div>
          <div className="sizes-container">
            {sizes.map((size) => (
              <div
                className="size"
                key={size}
                onClick={() => onAddToCart(product, size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
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
