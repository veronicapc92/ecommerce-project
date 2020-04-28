import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fonts.css";
import "./Dropdown.css";

const Menu = ({ productTypes }) => {
  return (
    <div className="menu">
      <div className="options-container">
        <div className="options">
          <ul>
            <li>New Arrivals</li>
            <li>Evening dresses</li>
            <li>Office looks</li>
            <li>Denim</li>
            <li>Maternity wear</li>
            <li>Plus sizes</li>
          </ul>
        </div>
        <div className="options">
          <span className="options-title">Clothing</span>
          <ul>
            {productTypes.map((productType) => {
              return (
                <li key={productType.name}>
                  <NavLink
                    className="women-clothes-links"
                    to={`/women/${productType.route}`}
                  >
                    {productType.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="options">
          <span className="options-title">Accessories</span>
          <ul>
            <li>Shoes</li>
            <li>Jewellery</li>
            <li>Bags & Wallets</li>
            <li>Scarves</li>
            <li>Hats</li>
            <li>Belts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
