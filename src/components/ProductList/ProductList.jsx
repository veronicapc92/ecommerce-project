import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/fonts.css";
import "./ProductList.css";

const ProductList = ({ productTypes }) => {
  return (
    <div className="filter-div">
      <ul className="filter-div-list">
        {productTypes.map((productType) => (
          <li className="ladies-product-type" key={productType.name}>
            <Link
              className="ladies-product-type"
              to={`/women/${productType.route}`}
            >
              {productType.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
