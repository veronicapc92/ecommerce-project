import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Homepage from "./components/Homepage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import FilteredProductTypePage from "./components/FilteredProductTypePage/FilteredProductTypePage";
import AuthDrawer from "./components/AuthDrawer/AuthDrawer";
import ShoppingCartDrawer from "./components/ShoppingCartDrawer/ShoppingCartDrawer";
import NotFound from "./components/NotFound/NotFound";
import http from "./services/httpService";
import config from "./config.json";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    signInDrawerOpen: false,
    registerDrawerOpen: false,
    shoppingCartDrawerOpen: false,
    products: [],
    productTypes: [],
    cart: [],
  };

  async componentDidMount() {
    const { data: products } = await http.get(config.apiUrl + "/products");

    const { data } = await http.get(config.apiUrl + "/producttypes");
    const productTypes = [{ name: "View All", id: 0, route: "" }, ...data];

    this.setState({ products, productTypes });

    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  handleDrawerToggleClick = () => {
    this.setState({ sideDrawerOpen: true });
  };

  handleBackdropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleSignInIconClick = () => {
    this.setState({ registerDrawerOpen: false, signInDrawerOpen: true });
  };

  handleXButtonClick = () => {
    this.setState({ signInDrawerOpen: false });
  };

  handleCloseNavbar = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleRegisterSpanClick = () => {
    this.setState({ registerDrawerOpen: true });
  };

  handleEnterButtonClick = (errors) => {
    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length !== 0)
      this.setState({ registerDrawerOpen: true });
    else this.setState({ registerDrawerOpen: false });
  };

  handleShoppingCartClick = () => {
    this.setState({ shoppingCartDrawerOpen: true });
  };

  handleCloseShoppingCart = () => {
    this.setState({ shoppingCartDrawerOpen: false });
  };

  handleLike = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };

  // handleAddToCart = (product) => {
  //   const products = [...this.state.products];
  //   const index = products.indexOf(product);
  //   products[index] = { ...product };
  //   products[index].count++;
  //   this.setState({ products });
  // };

  handleAddToCart = (product, size) => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(
      (item) => item._id === product._id && item.size === size
    );

    if (index >= 0) {
      cart[index] = { ...this.state.cart[index] };
      cart[index].count++;
    } else
      cart.push({
        _id: product._id,
        name: product.name,
        link: product.link,
        price: product.price,
        size,
        count: 1,
      });

    this.setState({ cart });
  };

  handleIncrementQuantity = (item) => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(
      (i) => i._id === item._id && i.size === item.size
    );
    cart[index] = { ...item };
    cart[index].count++;

    this.setState({ cart });
  };

  handleDecrementQuantity = (item) => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(
      (i) => i._id === item._id && i.size === item.size
    );
    cart[index] = { ...item };

    if (cart[index].count > 1) {
      cart[index].count--;
      this.setState({ cart });
    } else {
      cart.splice(cart[index], 1);
    }

    this.setState({ cart });
  };

  // handleFilterByProductType = (productType) => {
  //   // const filteredProducts = this.state.products.filter(
  //   //   (p) => p.type === productType.name
  //   // );
  //   this.setState({ currentProductType: productType.name });
  // };

  render() {
    const {
      sideDrawerOpen,
      signInDrawerOpen,
      registerDrawerOpen,
      shoppingCartDrawerOpen,
      products,
      productTypes,
      user,
      cart,
    } = this.state;
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop onBackdropClick={this.handleBackdropClick} />;
    }

    let classesOfMain = shoppingCartDrawerOpen ? "hidden" : "visible";

    return (
      <main style={{ height: "100vh", overflow: classesOfMain }}>
        <NavBar
          user={user}
          cart={cart}
          productTypes={productTypes}
          onSignInIconClick={this.handleSignInIconClick}
          onDrawerToggleClick={this.handleDrawerToggleClick}
          onXButtonClick={this.handleXButtonClick}
          onShoppingCartClick={this.handleShoppingCartClick}
        />
        <SideDrawer
          show={sideDrawerOpen}
          onCloseNavbar={this.handleCloseNavbar}
        />
        <AuthDrawer
          show={!user && signInDrawerOpen}
          registerDrawerOpen={registerDrawerOpen}
          onXButtonClick={this.handleXButtonClick}
          onRegisterSpanClick={this.handleRegisterSpanClick}
          onEnterButtonClick={this.handleEnterButtonClick}
        />
        <ShoppingCartDrawer
          show={shoppingCartDrawerOpen}
          onCloseShoppingCart={this.handleCloseShoppingCart}
          cart={cart}
          onIncrementQuantity={this.handleIncrementQuantity}
          onDecrementQuantity={this.handleDecrementQuantity}
        />
        {backdrop}
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route
            path="/women/:route"
            render={(props) => (
              <FilteredProductTypePage
                {...props}
                products={products}
                productTypes={productTypes}
                onLike={this.handleLike}
              />
            )}
          ></Route>
          <Route
            path="/women"
            render={(props) => (
              <ProductsPage
                {...props}
                products={products}
                productTypes={productTypes}
                onLike={this.handleLike}
                onAddToCart={this.handleAddToCart}
              />
            )}
          ></Route>
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
