import React from "react";
import Slider from "./Slider";
import HomepageContent from "./HomepageContent";
import CSSSlider from "./CSSSlider";

const Homepage = () => {
  return (
    <React.Fragment>
      {/* <Slider /> */}
      <CSSSlider />
      <HomepageContent />
    </React.Fragment>
  );
};

export default Homepage;
