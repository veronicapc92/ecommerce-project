import React, { useContext } from "react";
import styles from "./like.module.css";
import { ProductsContext } from "../../../contexts/ProductsContext";

const Like = ({ product }) => {
  const { handleLike } = useContext(ProductsContext);

  let classes = "fa-heart fa-lg";
  classes += product.liked ? " fas" : " far";

  return (
    <button className={styles.likeButton} onClick={() => handleLike(product)}>
      <i className={classes}></i>
    </button>
  );
};

export default Like;
