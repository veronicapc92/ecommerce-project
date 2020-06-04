import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import NavBar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import CartContextProvider from "./contexts/CartContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import ProductTypesContextProvider from "./contexts/ProductTypesContext";

function App() {
  let [user, setUser] = useState({});
  let [sideDrawerOpen, setSideDrawer] = useState(false);

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

  let backdrop;

  if (sideDrawerOpen)
    backdrop = <Backdrop onBackdropClick={() => setSideDrawer(false)} />;

  return (
    <main>
      <ProductTypesContextProvider>
        <CartContextProvider>
          <NavBar user={user} onDrawerToggleClick={() => setSideDrawer(true)} />
          <SideDrawer
            show={sideDrawerOpen}
            onCloseNavbar={() => setSideDrawer(false)}
          />
          {backdrop}
          <ProductsContextProvider>
            <Switch>
              <Route path="/home" component={Homepage}></Route>
              <Route
                path="/women/:route"
                render={(props) => <ProductsPage {...props} />}
              />
              <Route
                path="/women"
                render={(props) => <ProductsPage {...props} />}
              />
              <Route
                path="/products/:productRoute"
                render={(props) => <ProductPage {...props} />}
              />
              <Route path="/wishlist" component={WishlistPage} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/home" />
              <Redirect to="not-found" />
            </Switch>
          </ProductsContextProvider>
        </CartContextProvider>
      </ProductTypesContextProvider>
      <Footer />
    </main>
  );
}
export default App;
