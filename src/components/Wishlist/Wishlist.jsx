import React from "react";
import WishlistProduct from "./WishlistProduct/WishlistProduct";
import styles from "./wishlist.module.css";

const Wishlist = ({ products, onAddToCart, onDeleteWishlistProduct }) => {
  const likedProducts = products.filter((p) => p.liked === true);

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Your wishlist</h1>
      {likedProducts.length === 0 && (
        <div>
          <div className={styles.div}>
            You have currently no items in your wishlist.
          </div>
        </div>
      )}
      {likedProducts.length > 0 && (
        <div>
          <p className={styles.paragraph}>
            All your favourite items in one place
          </p>
          <div className={styles.container}>
            {likedProducts.map((product) => (
              <WishlistProduct
                key={product._id}
                product={product}
                onAddToCart={onAddToCart}
                onDeleteWishlistProduct={onDeleteWishlistProduct}
              />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Wishlist;
