import React, { Component } from "react";
import ProductCards from "../ProductCards/ProductCards";
import ProductList from "../ProductList/ProductList";
import "../assets/css/fonts.css";

class FilteredProductTypePage extends Component {
  render() {
    const { products, productTypes, onLike } = this.props;

    console.log(products);

    let filteredProducts = products.filter(
      (p) => p.type === this.props.match.params.route
    );

    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="filter-container">
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

export default FilteredProductTypePage;
