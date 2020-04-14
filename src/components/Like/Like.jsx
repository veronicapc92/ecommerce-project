import React from "react";
import "./Like.css";

const Like = ({ product, onLike }) => {
  let classes = "fa fa-heart";
  classes += product.liked ? " fa-2x" : "-o fa-2x";

  return (
    <button onClick={() => onLike(product)}>
      <i className={classes} aria-hidden="true"></i>
    </button>
  );
};

export default Like;
