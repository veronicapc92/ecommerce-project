import React from "react";
import "../assets/css/fonts.css";
import "./Menu.css";

const Menu = ({ onMenuEnter, onMenuLeave }) => {
  return (
    <div className="menu" onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
      <div className="options-container">
        <div className="options-container options">
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
          <span style={{ fontWeight: "600" }}>Clothing</span>
          <li>Trousers</li>
          <li>Jeans</li>
          <li>Blazers</li>
          <li>Sweatshirts & Hoodies</li>
          <li>Dresses</li>
          <li>Shirts & Blouses</li>
          <li>Tops</li>
          <li>Cardigans & Jumpers</li>
          <li>Skirts</li>
        </div>
        <div className="options">
          <span style={{ fontWeight: "600" }}>Accessories</span>
          <li>Shoes</li>
          <li>Jewellery</li>
          <li>Bags & Wallets</li>
          <li>Scarves</li>
          <li>Hats</li>
          <li>Belts</li>
        </div>
      </div>
    </div>
  );
};

export default Menu;
