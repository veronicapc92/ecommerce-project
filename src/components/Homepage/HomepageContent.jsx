import React from "react";
import card1 from "./photos/denim-looks.png";
import card2 from "./photos/summer-vibes.png";
import card3 from "./photos/home-decor.png";
import "./HomepageContent.css";

const Container = () => {
  return (
    <div className="container">
      <div className="homepage-images-container">
        <img alt="denim-looks" className="card1" src={card1} />
        <img alt="summer-vibes" className="card2" src={card2} />
        <img alt="home-decor" className="card3" src={card3} />
      </div>
    </div>
  );
};

export default Container;
