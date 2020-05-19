import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Homepage from "./components/Homepage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductPage from "./hooks/ProductPage/ProductPage";
import AuthDrawer from "./components/AuthDrawer/AuthDrawer";
import ShoppingCartDrawer from "./components/ShoppingCartDrawer/ShoppingCartDrawer";
import SignOut from "./components/SignOut/SignOut";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import NotFound from "./components/NotFound/NotFound";
import CartContextProvider from "./contexts/CartContext";
import FilterDropdownContextProvider from "./contexts/FilterDropdownContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import ProductTypesContextProvider from "./contexts/ProductTypesContext";

function App() {
  let [user, setUser] = useState({});
  let [sideDrawerOpen, setSideDrawer] = useState(false);
  let [signInDrawerOpen, setSignInDrawer] = useState(false);
  let [registerDrawerOpen, setRegisterDrawer] = useState(false);
  let [shoppingCartDrawerOpen, setShoppingCartDrawer] = useState(false);
  let [signOutDrawerOpen, setSignOutDrawer] = useState(false);

  useEffect(() => {

    async function getUser() {
      try {
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt);
        setUser((prevState) => {
          return { ...prevState, name: user.name, _id: user._id };
        });
      } catch (ex) {}
    }

    getUser();
  }, []);

  // function handleEnterButtonClick(errors) {
  //   setRegisterDrawer(() => {
  //     if (Object.keys(errors).length !== 0) return true;
  //     else return false;
  //   });
  // }

  function handleSignOutIconClick() {
    setSignOutDrawer((prevState) => {
      return !prevState;
    });
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop onBackdropClick={() => setSideDrawer(false)} />;
  }

  return (
    <main>
      <ProductTypesContextProvider>
      <CartContextProvider>
        <NavBar
          user={user}
          signOutDrawerOpen={signOutDrawerOpen}
          onSignInIconClick={() => setSignInDrawer(true)}
          onSignOutIconClick={handleSignOutIconClick}
          onDrawerToggleClick={() => setSideDrawer(true)}
          onShoppingCartClick={() => setShoppingCartDrawer(true)}

        />
        <SignOut signOutDrawerOpen={signOutDrawerOpen}
        onLeave={() => setSignOutDrawer(false)} />
        <SideDrawer
          show={sideDrawerOpen}
          onCloseNavbar={() => setSideDrawer(false)}
        />
        <AuthDrawer
          show={!user.name && signInDrawerOpen}
          registerDrawerOpen={registerDrawerOpen}
          onXButtonClick={() => setSignInDrawer(false)}
          onRegisterSpanClick={() => setRegisterDrawer(true)}
          // onEnterButtonClick={handleEnterButtonClick}
        />
        <ShoppingCartDrawer
          show={shoppingCartDrawerOpen}
          onCloseShoppingCart={() => setShoppingCartDrawer(false)}

        />
        {backdrop}
        <ProductsContextProvider>
          <FilterDropdownContextProvider>
            <Switch>
              <Route path="/home" component={Homepage}></Route>
              <Route path="/women/:route" render={(props) => <ProductsPage {...props} />}/>
              <Route path="/women" render={(props) => <ProductsPage {...props} />}/>
              <Route path="/products/:productRoute" render={(props) => <ProductPage {...props} />}/>
              <Route path="/wishlist" component={WishlistPage}/>
              <Route path="/not-found" component={NotFound}/>
              <Redirect from="/" exact to="/home" />
              <Redirect to="not-found" />
            </Switch>
          </FilterDropdownContextProvider>
        </ProductsContextProvider>
      </CartContextProvider>
      </ProductTypesContextProvider>
      <Footer />
    </main>
  );
}
export default App;
