import React from "react";
import card1 from "./assets/photos/denim-looks.png";
import card2 from "./assets/photos/summer-vibes.png";
import card3 from "./assets/photos/home-3.png";
import styles from "./container.module.css";

const Container = () => {
  const cards = [card1, card2, card3];

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img alt="card1" className={styles.card1} src={card1} />
        <img alt="card2" className={styles.card2} src={card2} />
        <img alt="card3" className={styles.card3} src={card3} />
      </div>
    </div>
  );
};

export default Container;
