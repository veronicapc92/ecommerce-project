import React from "react";
import styles from "./like.module.css";

const Like = ({ product, onLike }) => {
  let classes = "fa-heart fa-lg";
  classes += product.liked ? " fas" : " far";

  return (
    <button className={styles.likeButton} onClick={() => onLike(product)}>
      <i className={classes}></i>
    </button>
  );
};

export default Like;
