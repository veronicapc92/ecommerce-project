import React, { Component } from "react";
import ProductList from "../ProductList/ProductList";
import ProductCards from "../ProductCards/ProductCards";
import "../assets/css/fonts.css";
import "./ProductsPage.css";

class ProductsPage extends Component {
  render() {
    const { products, productTypes, onLike, onAddToCart } = this.props;

    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="product-type-filter-container">
            <ProductList productTypes={productTypes} />
          </div>
          <div className="images-container">
            <ProductCards
              filteredProducts={products}
              onLike={onLike}
              onAddToCart={onAddToCart}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductsPage;
