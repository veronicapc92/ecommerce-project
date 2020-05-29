import React, { useContext } from "react";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import WishlistProduct from "./WishlistProduct/WishlistProduct";
import { ProductsContext } from "./../../contexts/ProductsContext";
import styles from "./wishlist-page.module.css";

const WishlistPage = () => {
  const { products } = useContext(ProductsContext);

  const likedProducts = products.filter((p) => p.liked);

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
              <WishlistProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default WishlistPage;
