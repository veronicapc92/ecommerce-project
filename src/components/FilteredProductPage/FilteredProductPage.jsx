import React, { Component } from "react";
import ProductCards from "./ProductCards";
import ProductList from "../ProductList/ProductList";
import Filter from "../Filter/Filter";
import "../assets/css/fonts.css";
import "./ProductPage.css";
import axios from "axios";

class FilteredProductPage extends Component {
  render() {
    const { products, productTypes, currentProductType, onLike } = this.props;

    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="filter-container">
            <ProductList productTypes={productTypes} />
          </div>
          <div className="images-container">
            <ProductCards
              onLike={onLike}
              products={products}
              currentProductType={currentProductType}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FilteredProductPage;
