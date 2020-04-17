import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Homepage from "./components/Homepage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import FilteredProductTypePage from "./components/FilteredProductTypePage/FilteredProductTypePage";
import SignInDrawer from "./components/SignInDrawer/SignInDrawer";
import NotFound from "./components/NotFound";
import http from "./services/httpService";
import config from "./config.json";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    signInDrawerOpen: false,
    registerDrawerOpen: false,
    products: [],
    productTypes: [], //not used
    currentProductType: "", //not used so far
    womenClothingOptions: [],
    womenData: {},
  };

  async componentDidMount() {
    const { data: products } = await http.get(config.apiUrl + "/clothes");
    const { data: womenData } = await http.get(config.apiUrl + "/women");
    const womenClothingOptions = [
      { name: "View All", id: 0, route: "" },
      ...womenData.womenClothingOptions,
    ];
    this.setState({ products, womenClothingOptions });
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

  handleRegisterSpanClick = () => {
    this.setState({ registerDrawerOpen: true });
  };

  // handleEnterButtonClick = (errors) => {
  //   console.log(Object.keys(errors).length);
  //   // if (Object.keys(errors).length !== 0)
  //   //   this.setState({ registerDrawerOpen: true });
  //   // else this.setState({ registerDrawerOpen: false });
  // };

  handleLike = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };

  // handleSelectByProductType = (productType) => {
  //   this.setState({ currentProductType: productType.route });
  // };

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
      products,
      womenClothingOptions,
      womenData,
    } = this.state;
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop onBackdropClick={this.handleBackdropClick} />;
    }

    return (
      <main style={{ height: "100vh" }}>
        <NavBar
          productTypes={womenClothingOptions}
          onSignInIconClick={this.handleSignInIconClick}
          onDrawerToggleClick={this.handleDrawerToggleClick}
          onXButtonClick={this.handleXButtonClick}
        />
        <SignInDrawer
          show={signInDrawerOpen}
          registerDrawerOpen={registerDrawerOpen}
          onXButtonClick={this.handleXButtonClick}
          onRegisterSpanClick={this.handleRegisterSpanClick}
        />
        {/* <SignIn
          show={signInDrawerOpen}
          onXButtonClick={this.handleXButtonClick}
          onRegisterSpanClick={this.handleRegisterSpanClick}
        /> */}
        {/* <Register
          show={registerDrawerOpen}
          onXButtonClick={this.handleXButtonClick}
        /> */}
        {/* <SignInDrawer
          show={signInDrawerOpen}
          onXButtonClick={this.handleXButtonClick}
        /> */}
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route
            path="/women/:route"
            render={(props) => (
              <FilteredProductTypePage
                {...props}
                products={products}
                productTypes={womenClothingOptions}
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
                productTypes={womenClothingOptions}
                onLike={this.handleLike}
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
