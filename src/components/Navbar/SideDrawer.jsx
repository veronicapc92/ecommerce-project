import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/not-found">New</NavLink>
        </li>
        <li>
          <NavLink to="/products">Ladies</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Men</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Kids</NavLink>
        </li>
        <li>
          <NavLink to="not-found">Gōsha Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
