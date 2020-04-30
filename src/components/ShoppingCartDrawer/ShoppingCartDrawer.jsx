import React, { Component } from "react";
import { Link } from "react-router-dom";
import shoppingBagImage from "./assets/shopping-bag-bw.png";
import "../assets/css/fonts.css";
import "./ShoppingCartDrawer.css";

class ShoppingCartDrawer extends Component {
  render() {
    const {
      show,
      cart,
      onCheckout,
      onIncrementQuantity,
      onDecrementQuantity,
    } = this.props;

    const totalPricePerItem = cart.map((item) => item.count * item.price);
    const totalPrice = totalPricePerItem.reduce((acc, value) => acc + value, 0);

    let classes = "shopping-cart-container";
    if (show) {
      classes = "shopping-cart-container open op";
    }

    return (
      <div className={classes}>
        <div className="close-shopping-cart-icon" onClick={onCheckout}>
          ×
        </div>
        {cart.length === 0 && (
          <div className="empty-shopping-cart">
            <div className="empty-shopping-cart-container">
              <img
                className="empty-shopping-cart-image"
                src={shoppingBagImage}
              />
              <h1 className="empty-shopping-cart-message">
                Your shopping bag is empty.
              </h1>
              <p>Fill it with with your favourite items from our collection!</p>
              <div>
                <button className="see-collection-button">
                  <Link to="/women">See collection</Link>
                </button>
              </div>
            </div>
          </div>
        )}
        {cart.length > 0 && (
          <div className="shopping-cart">
            <h1 className="shopping-cart-header">
              Your shopping bag (
              {cart.reduce((acc, item) => acc + item.count, 0)})
            </h1>
            <div className="shopping-cart-items-container">
              {cart.map((item) => (
                <div
                  key={`${item._id}${item.size}`}
                  className="shopping-cart-item-container"
                >
                  <div className="shopping-cart-item-image-container">
                    <img className="shopping-cart-item-image" src={item.link} />
                  </div>
                  <div className="shopping-cart-item-details">
                    <h2 className="shopping-cart-item-name">{item.name}</h2>
                    <p className="shopping-cart-item-size">Size: {item.size}</p>
                    <div>
                      <button
                        className="shopping-cart-button"
                        onClick={() => onIncrementQuantity(item)}
                      >
                        +
                      </button>
                      <span className="shopping-cart-item-quantity">
                        {item.count}
                      </span>
                      <button
                        className="shopping-cart-button"
                        onClick={() => onDecrementQuantity(item)}
                      >
                        -
                      </button>
                    </div>
                    <span className="shopping-cart-item-price">{`£${(
                      Math.round(item.price * item.count * 100) / 100
                    ).toFixed(2)}`}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-container">
              <div className="total-price-container">
                <div className="total">Total price:</div>
                <div className="total-price">
                  £{(Math.round(totalPrice * 100) / 100).toFixed(2)}
                </div>
              </div>
              <div className="checkout-button-container">
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCartDrawer;
