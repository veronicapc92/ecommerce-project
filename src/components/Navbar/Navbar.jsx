import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import Logout from "./../Logout/Logout";
import Dropdown from "./Dropdown";
import logo from "../assets/photos/gosha_transparent.png";
import "../assets/css/fonts.css";
import "./Navbar.css";

class Navbar extends Component {
  // state = { menuOpen: true, currentMenuOption: "" };

  // handleMenuEnter = (text) => {
  //   this.setState({ menuOpen: true, currentMenuOption: text });
  // };

  // handleMenuLeave = () => {
  //   this.setState({ menuOpen: false });
  // };

  // handleDropdownEnter = () => {
  //   this.setState({ menuOpen: true });
  // };

  // handleDropdownLeave = () => {
  //   this.setState({ menuOpen: false });
  // };

  render() {
    const {
      productTypes,
      user,
      onXButtonClick,
      onDrawerToggleClick,
      onSignInIconClick,
    } = this.props;

    return (
      <React.Fragment>
        <header className="header">
          <div className="main-nav" onClick={onXButtonClick}>
            <div className="toggle-button-container">
              <DrawerToggleButton click={onDrawerToggleClick} />
            </div>
            <div className="logo-container">
              <NavLink to="/">
                <img alt="logo" src={logo} />
              </NavLink>
            </div>
            <nav className="navbar dropdown">
              <ul>
                <li>
                  <NavLink className="navbar-links" to="/not-found">
                    New
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-links" to="/women">
                    Women
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-links" to="/not-found">
                    Men
                  </NavLink>
                </li>
                <li>
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
              <div class="dropdown-test">
                <Dropdown productTypes={productTypes} />
              </div>
            </nav>
          </div>
          <nav className="secondary-nav">
            <ul>
              {!user && (
                <li className="secondary-nav-icons" onClick={onSignInIconClick}>
                  <i className="fas fa-user-circle fa-lg"></i>
                </li>
              )}
              {user && (
                <li className="secondary-nav-icons">
                  <Logout />
                </li>
              )}

              <li>
                <NavLink to="/wishlist" className="secondary-nav-icons">
                  <i className="far fa-heart fa-lg"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="shopping-cart" className="secondary-nav-icons">
                  <i className="fas fa-shopping-bag fa-lg"></i>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
