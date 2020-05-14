import React from "react";
import card1 from "./photos/denim-looks.png";
import card2 from "./photos/summer-vibes.png";
import card3 from "./photos/gosha-decor.png";
import card4 from "./photos/menswear.png";
import styles from "./homepage-content.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img alt="summer-vibes" className={styles.card} src={card2} />
        <img alt="gosha-decor" className={styles.card} src={card3} />
        <img alt="denim-looks" className={styles.card} src={card1} />
        <img alt="menswear" className={styles.card} src={card4} />
      </div>
    </div>
  );
};

export default Container;
