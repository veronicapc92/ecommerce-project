import React, { Component } from "react";
import ProductList from "../ProductList/ProductList";
import ProductCards from "../ProductCards/ProductCards";
import "../assets/css/fonts.css";
import "./ProductsPage.css";

class ProductsPage extends Component {
  render() {
    const { products, productTypes, onLike } = this.props;

    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="filter-container">
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

export default ProductsPage;
