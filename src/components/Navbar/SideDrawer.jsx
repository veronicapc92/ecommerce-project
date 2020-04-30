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
        <ul className="side-drawer-options">
          <li className="side-drawer-option" onClick={onCloseNavbar}>
            New
          </li>
          <li className="side-drawer-option" onClick={onCloseNavbar}>
            <NavLink className="women-products-link" to="/women">
              Ladies
            </NavLink>
          </li>
          <li className="side-drawer-option" onClick={onCloseNavbar}>
            Men
          </li>
          <li className="side-drawer-option" onClick={onCloseNavbar}>
            Kids
          </li>
          <li className="side-drawer-option" onClick={onCloseNavbar}>
            Gōsha Home
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
