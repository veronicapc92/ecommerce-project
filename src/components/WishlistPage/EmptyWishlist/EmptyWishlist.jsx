import React from "react";
import { Link } from "react-router-dom";
import styles from "./empty-wishlist.module.css";

const EmptyWishlist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your wishlist is empty.</h1>
      <p className={styles.paragraph}>
        Find your favourite items easily by keeping them all in one place.
      </p>
      <Link to="/women">
        <button className={styles.button}>Add products</button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
