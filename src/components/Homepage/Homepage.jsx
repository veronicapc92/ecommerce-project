import React from "react";
import HomepageContent from "./HomepageContent/HomepageContent";
import Slider from "./Slider/Slider";

const Homepage = () => {
  return (
    <React.Fragment>
      <Slider />
      <HomepageContent />
    </React.Fragment>
  );
};

export default Homepage;
