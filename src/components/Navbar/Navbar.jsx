import React from "react";
import MainNav from "./MainNav/MainNav";
import SecondaryNav from "./SecondaryNav/SecondaryNav";
import "../assets/css/fonts.css";
import "./Navbar.css";

const Navbar = ({
  productTypes,
  user,
  cart,
  onDrawerToggleClick,
  onSignInIconClick,
  onShoppingCartClick,
}) => {
  return (
    <header className="header">
      <MainNav
        productTypes={productTypes}
        onDrawerToggleClick={onDrawerToggleClick}
      />
      <SecondaryNav
        user={user}
        cart={cart}
        onSignInIconClick={onSignInIconClick}
        onShoppingCartClick={onShoppingCartClick}
      />
    </header>
  );
};

export default Navbar;
