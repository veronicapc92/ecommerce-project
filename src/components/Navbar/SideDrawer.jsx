import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fonts.css";
import "./SideDrawer.css";

const SideDrawer = ({ show, onCloseNavbar }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses += " open";
  }
  return (
    <div className={drawerClasses}>
      <div className="close-navbar-icon" onClick={onCloseNavbar}>
        ×
      </div>
      <nav>
        <ul>
          <li onClick={onCloseNavbar}>
            <NavLink to="/not-found">New</NavLink>
          </li>
          <li onClick={onCloseNavbar}>
            <NavLink to="/women">Ladies</NavLink>
          </li>
          <li onClick={onCloseNavbar}>
            <NavLink to="/not-found">Men</NavLink>
          </li>
          <li onClick={onCloseNavbar}>
            <NavLink to="/not-found">Kids</NavLink>
          </li>
          <li onClick={onCloseNavbar}>
            <NavLink to="not-found">Gōsha Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
