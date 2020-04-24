import React from "react";
import "./Like.css";

const Like = ({ product, onLike }) => {
  let classes = "fa-heart fa-lg";
  classes = (product.liked ? "fas " : "far ") + classes;

  return (
    <button onClick={() => onLike(product)}>
      <i className={classes} aria-hidden="true"></i>
    </button>
  );
};

export default Like;
