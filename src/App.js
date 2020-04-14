import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Homepage from "./components/Homepage/Homepage";
import ProductPage from "./components/ProductPage/ProductPage";
import FilteredPage from "./components/FilteredPage/FilteredPage";
import SignIn from "./components/SignIn";
import Wishlist from "./components/Wishlist";
import ShoppingCart from "./components/ShoppingCart";
import NotFound from "./components/NotFound";
import axios from "axios";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    products: [],
    productTypes: [],
    currentProductType: "",
  };

  async componentDidMount() {
    const { data: products } = await axios.get("http://localhost:8000/clothes");
    const { data } = await axios.get("http://localhost:8000/productTypes");
    const productTypes = [{ name: "View All", id: 0, route: "" }, ...data];
    this.setState({ products, productTypes });
  }

  handleDrawerToggleClick = () => {
    this.setState({ sideDrawerOpen: true });
  };

  handleBackdropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleLike = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };

  handleFilterByProductType = (productType) => {
    // const filteredProducts = this.state.products.filter(
    //   (p) => p.type === productType.name
    // );
    this.setState({ currentProductType: productType.name });
  };

  render() {
    const {
      sideDrawerOpen,
      products,
      productTypes,
      currentProductType,
    } = this.state;
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
          <Route
            path="/products/:route"
            render={(props) => (
              <FilteredPage
                {...props}
                products={products}
                productTypes={productTypes}
                onLike={this.handleLike}
              />
            )}
          ></Route>
          <Route
            path="/products"
            render={(props) => (
              <ProductPage
                {...props}
                products={products}
                productTypes={productTypes}
                currentProductType={currentProductType}
                onLike={this.handleLike}
              />
            )}
          ></Route>
          {/* <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/wishlist" component={Wishlist}></Route>
          <Route path="/shopping-cart" component={ShoppingCart}></Route> */}
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
