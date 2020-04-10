import React from "react";
import { Carousel } from "react-responsive-carousel";
import slide1 from "./photos/accessories.jpg";
import slide2 from "./photos/man.jpg";
import slide3 from "./photos/striped-dress.jpg";

const slides = [slide1, slide2, slide3];

export default () => (
  <Carousel
    autoPlay
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={5000}
    infiniteLoop={true}
  >
    {slides.map((slide) => {
      return (
        <div key={slide} style={{ marginTop: "100px" }}>
          <img alt="cover" src={slide} />
        </div>
      );
    })}
  </Carousel>
);
