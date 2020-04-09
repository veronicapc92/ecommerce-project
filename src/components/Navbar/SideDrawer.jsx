import React from "react";
import fonts from "../assets/css/fonts.css";
import "./SideDrawer.css";

const SideDrawer = ({ show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses += " open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="">New</a>
        </li>
        <li>
          <a href="">Ladies</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Kids</a>
        </li>
        <li>
          <a href="">Gōsha Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
