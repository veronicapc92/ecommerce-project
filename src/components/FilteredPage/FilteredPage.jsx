import React, { Component } from "react";
import ProductCards from "../ProductPage/ProductCards";
import ProductList from "./../ProductList/ProductList";
import Filter from "../Filter/Filter";
import "../assets/css/fonts.css";
import "./FilteredPage.css";
import axios from "axios";

class FilteredPage extends Component {
  render() {
    const {
      products,
      productTypes,
      currentProductType,
      onLike,
      onFilterByProductType,
    } = this.props;

    let filteredProducts = products.filter(
      (p) => p.type === this.props.match.params.route
    );

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
            <ProductCards onLike={onLike} filteredProducts={filteredProducts} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FilteredPage;
