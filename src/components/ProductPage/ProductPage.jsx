import React, { Component } from "react";
import ProductCards from "./ProductCards";
import ProductList from "../ProductList/ProductList";
import Filter from "./../Filter/Filter";
import "../assets/css/fonts.css";
import "./ProductPage.css";
import axios from "axios";

class ProductPage extends Component {
  // handleFilterByProductType = (productType) => {
  //   // const filteredProducts = this.state.products.filter(
  //   //   (p) => p.type === productType.name
  //   // );
  //   this.setState({ currentProductType: productType.name });
  // };

  render() {
    const {
      products,
      productTypes,
      currentProductType,
      onLike,
      onFilterByProductType,
    } = this.props;

    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="filter-container">
            {/* <Filter
              productTypes={productTypes}
              onFilterByProductType={onFilterByProductType}
            /> */}
            <ProductList productTypes={productTypes} />
          </div>
          <div className="images-container">
            <ProductCards onLike={onLike} filteredProducts={products} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductPage;
