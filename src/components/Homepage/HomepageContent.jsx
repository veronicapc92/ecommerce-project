import React from "react";
import card1 from "./photos/denim-looks.png";
import card2 from "./photos/summer-vibes.png";
import card3 from "./photos/home-decor.png";
import styles from "./homepage-content.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img alt="denim-looks" className={styles.card1} src={card1} />
        <img alt="summer-vibes" className={styles.card2} src={card2} />
        <img alt="home-decor" className={styles.card3} src={card3} />
      </div>
    </div>
  );
};

export default Container;
