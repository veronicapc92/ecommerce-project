import React from "react";
import MainNav from "./MainNav/MainNav";
import SecondaryNav from "../SecondaryNav/SecondaryNav";
import "../assets/css/fonts.css";
import "./Navbar.css";

const Navbar = ({
  user,
  onDrawerToggleClick,
  onSignInIconClick,
  onSignOutIconClick,
  onShoppingCartClick,
}) => {
  return (
    <header className="header">
      <MainNav onDrawerToggleClick={onDrawerToggleClick} />
      <div className="wrapper">
        {user.name && <span className="name">Hi {user.name}</span>}
        <SecondaryNav
          user={user}
          onSignInIconClick={onSignInIconClick}
          onSignOutIconClick={onSignOutIconClick}
          onShoppingCartClick={onShoppingCartClick}
        />
      </div>
    </header>
  );
};

export default Navbar;
