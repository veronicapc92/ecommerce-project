import React from "react";
import slide1 from "./photos/accessories1.png";
import slide2 from "./photos/accessories2.png";
import slide3 from "./photos/dress1.png";
import slide4 from "./photos/dress2.png";
import slide5 from "./photos/man1.png";
import slide6 from "./photos/man2.png";
import styles from "./css-slider.module.css";

const CSSSlider = () => {
  return (
    <div className={styles.slider}>
      <ul>
        <li>
          <picture>
            <source
              srcset={slide2}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide1} alt="PP" className={styles.image} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcset={slide4}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide3} alt="PP" className={styles.image} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcset={slide6}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide5} alt="PP" className={styles.image} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcset={slide2}
              media="(max-width: 700px)"
              className={styles.image}
            />
            <img src={slide1} alt="PP" className={styles.image} />
          </picture>
        </li>
      </ul>
    </div>
  );
};

export default CSSSlider;
