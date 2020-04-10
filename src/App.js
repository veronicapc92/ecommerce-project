import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Homepage from "./components/Homepage/Homepage";
import ProductList from "./components/ProductPage/ProductPage";
import SignIn from "./components/SignIn";
import Wishlist from "./components/Wishlist";
import ShoppingCart from "./components/ShoppingCart";
import NotFound from "./components/NotFound";

class App extends Component {
  state = { sideDrawerOpen: false };

  handleDrawerToggleClick = () => {
    this.setState({ sideDrawerOpen: true });
  };

  handleBackdropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop onBackdropClick={this.handleBackdropClick} />;
    }

    return (
      <main style={{ height: "100vh" }}>
        <NavBar onDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route path="/products" component={ProductList}></Route>
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/wishlist" component={Wishlist}></Route>
          <Route path="/shopping-cart" component={ShoppingCart}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="not-found" />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
