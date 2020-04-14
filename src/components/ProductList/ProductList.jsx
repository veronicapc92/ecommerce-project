import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/fonts.css";
import "./ProductList.css";

const ProductList = ({ productTypes }) => {
  return (
    <div className="filter-div">
      <ul>
        {productTypes.map((productType) => (
          <li key={productType.id} className="ladies-product-type">
            <Link
              className="ladies-product-type"
              to={`/products/${productType.route}`}
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
