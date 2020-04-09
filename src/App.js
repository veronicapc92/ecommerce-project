import React, { Component } from "react";
import NavBar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import SideDrawer from "./components/Navbar/SideDrawer";
import Backdrop from "./components/Backdrop";
import axios from "axios";

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
      <div style={{ height: "100vh" }}>
        <NavBar onDrawerToggleClick={this.handleDrawerToggleClick} />
        {/* <Slider />
        <Container />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop} */}
        <ProductList />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
