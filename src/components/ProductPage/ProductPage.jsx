import React, { Component } from "react";
import ProductCards from "./ProductCards";
import fonts from "../assets/css/fonts.css";
import "./ProductPage.css";
import axios from "axios";

class ProductList extends Component {
  state = { productData: [] };

  async componentDidMount() {
    const { data: productData } = await axios.get(
      "http://localhost:8000/clothes"
    );
    this.setState({ productData });
  }

  render() {
    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="filter-container">Filter</div>
          <div className="images-container">
            <ProductCards productData={this.state.productData} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
