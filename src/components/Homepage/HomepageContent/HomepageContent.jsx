import React from "react";
import card1 from "../assets/denim-looks.png";
import card2 from "../assets/summer-vibes.png";
import card3 from "../assets/gosha-decor.png";
import card4 from "../assets/menswear.png";
import styles from "./homepage-content.module.css";

const HomepageContent = () => {
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

export default HomepageContent;
