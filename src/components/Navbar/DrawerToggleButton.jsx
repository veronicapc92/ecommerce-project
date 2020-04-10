import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = ({ click }) => {
  return (
    <button onClick={click} className="toggle-button">
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
    </button>
  );
};

export default DrawerToggleButton;
