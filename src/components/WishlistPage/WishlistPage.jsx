import React from "react";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import WishlistProduct from "../../hooks/WishlistProduct/WishlistProduct";
import styles from "./wishlist-page.module.css";

const WishlistPage = ({ products, onAddToCart, onDeleteWishlistProduct }) => {
  const likedProducts = products.filter((p) => p.liked === true);

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Wishlist</h1>
      {likedProducts.length === 0 && <EmptyWishlist />}
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

export default WishlistPage;
