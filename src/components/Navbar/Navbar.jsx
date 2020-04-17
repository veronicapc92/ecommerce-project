import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import Menu from "./Menu";
import logo from "../assets/photos/gosha_transparent.png";
import "../assets/css/fonts.css";
import "./Navbar.css";

class Navbar extends Component {
  state = { menuOpen: false, currentMenuOption: "" };

  handleMenuEnter = (text) => {
    this.setState({ menuOpen: true, currentMenuOption: text });
  };

  handleMenuLeave = () => {
    this.setState({ menuOpen: false });
  };

  handleDropdownEnter = () => {
    this.setState({ menuOpen: true });
  };

  handleDropdownLeave = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="main-nav" onClick={this.props.onXButtonClick}>
            <div className="toggle-button-container">
              <DrawerToggleButton click={this.props.onDrawerToggleClick} />
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
                  <NavLink
                    className="navbar-links"
                    to="/women"
                    onMouseEnter={() => this.handleMenuEnter("women")}
                    onMouseLeave={this.handleMenuLeave}
                  >
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
            </nav>
          </div>
          <nav className="secondary-nav">
            <ul>
              <li
                className="secondary-nav-icons"
                onClick={this.props.onSignInIconClick}
              >
                <i className="fas fa-user-circle fa-lg"></i>
              </li>
              <li>
                <NavLink to="/wishlist" className="secondary-nav-icons">
                  <i class="far fa-heart fa-lg"></i>
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
        {this.state.menuOpen && (
          <Menu
            onDropdownEnter={this.handleDropdownEnter}
            onDropdownLeave={this.handleDropdownLeave}
            data={this.props.data}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Navbar;
