import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fonts.css";
import "./Dropdown.css";

const Menu = ({ productTypes }) => {
  return (
    <div className="menu">
      <div className="options-container">
        <div>
          <ul className="options">
            <li className="option">New Arrivals</li>
            <li className="option">Evening dresses</li>
            <li className="option">Office looks</li>
            <li className="option">Denim</li>
            <li className="option">Maternity wear</li>
            <li className="option">Plus sizes</li>
          </ul>
        </div>
        <div className="options">
          <span className="options-title">Clothing</span>
          <ul className="options">
            {productTypes.map((productType) => {
              return (
                <li key={productType.name}>
                  <NavLink
                    className="women-clothes-links option"
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
          <ul className="options">
            <li className="option">Shoes</li>
            <li className="option">Jewellery</li>
            <li className="option">Bags & Wallets</li>
            <li className="option">Scarves</li>
            <li className="option">Hats</li>
            <li className="option">Belts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
