import React from "react";
import MainNav from "./MainNav/MainNav";
import SecondaryNav from "./SecondaryNav/SecondaryNav";
import "../assets/css/fonts.css";
import "./Navbar.css";

const Navbar = ({
  productTypes,
  user,
  cart,
  addToCartClicked,
  signOutDrawerOpen,
  onDrawerToggleClick,
  onSignInIconClick,
  onSignOutIconClick,
  onShoppingCartClick,
  onAnimation,
}) => {
  return (
    <header className="header">
      <MainNav
        productTypes={productTypes}
        onDrawerToggleClick={onDrawerToggleClick}
      />
      <div className="wrapper">
        {user && <span className="name">Hi adfasdasdlsdkasdfs</span>}
        <SecondaryNav
          user={user}
          cart={cart}
          addToCartClicked={addToCartClicked}
          signOutDrawerOpen={signOutDrawerOpen}
          onSignInIconClick={onSignInIconClick}
          onSignOutIconClick={onSignOutIconClick}
          onShoppingCartClick={onShoppingCartClick}
          onAnimation={onAnimation}
        />
      </div>
    </header>
  );
};

export default Navbar;
