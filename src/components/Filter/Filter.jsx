import React from "react";
import "../assets/css/fonts.css";
import "./Filter.css";

const Filter = ({ productTypes, onFilterByProductType }) => {
  return (
    <div className="filter-div">
      <ul>
        {productTypes.map((productType) => (
          <li
            onClick={() => onFilterByProductType(productType)}
            key={productType.id}
            className="ladies-product-type"
          >
            {productType.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
