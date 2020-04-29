import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import Logout from "./../Logout/Logout";
import WomenDropdown from "./WomenDropdown";
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
      cart,
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
            <nav className="navbar">
              <ul>
                <li className="navbar-options">New</li>
                <li className="dropdown">
                  <NavLink className="navbar-options women-link" to="/women">
                    Women
                  </NavLink>
                  <div className="dropdown-test">
                    <WomenDropdown productTypes={productTypes} />
                  </div>
                </li>
                <li className="navbar-options">Men</li>
                <li className="navbar-options">Kids</li>
                <li className="navbar-options">Gōsha Home</li>
              </ul>
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
              <li className="secondary-nav-icons shopping-cart">
                <div className="number-of-items">{cart.length}</div>
                <i className="fas fa-shopping-bag fa-lg"></i>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
