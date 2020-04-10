import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import logo from "../assets/photos/gosha_transparent.png";
import fonts from "../assets/css/fonts.css";
import "./Navbar.css";

const NavBar = ({ onDrawerToggleClick }) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="main-nav">
          <div className="toggle-button-container">
            <DrawerToggleButton click={onDrawerToggleClick} />
          </div>
          <div className="logo-container">
            <NavLink to="/">
              <img alt="logo" src={logo} />
            </NavLink>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink className="navbar-links" to="/not-found">
                  New
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-links" to="/products">
                  Ladies
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="navbar-links" to="/not-found">
                  Men
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="navbar-links" to="/not-found">
                  Kids
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="navbar-links" to="/not-found">
                  Gōsha Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="secondary-nav">
          <ul>
            <li>
              <NavLink to="/sign-in" className="secondary-nav-links">
                <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className="secondary-nav-links">
                <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="shopping-cart" className="secondary-nav-links">
                <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
