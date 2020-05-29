import React from "react";
import slide1 from "../assets/accessories1.png";
import slide2 from "../assets/accessories2.png";
import slide3 from "../assets/dress1.png";
import slide4 from "../assets/dress2.png";
import slide5 from "../assets/man1.png";
import slide6 from "../assets/man2.png";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <ul className={styles.ul}>
        <li>
          <picture>
            <source
              srcSet={slide2}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide1} alt="accessories" className={styles.image} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={slide4}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide3} alt="dress" className={styles.image} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={slide6}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide5} alt="menswear" className={styles.image} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={slide2}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide1} alt="accessories" className={styles.image} />
          </picture>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
