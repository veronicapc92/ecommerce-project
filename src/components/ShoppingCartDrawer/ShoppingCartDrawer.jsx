import React, { Component } from "react";
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

    let classes = "shopping-cart-container";
    if (show) {
      classes = "shopping-cart-container open";
    }

    return (
      <div className={classes}>
        <div className="close-shopping-cart-icon" onClick={onCheckout}>
          ×
        </div>
        <h1 className="shopping-cart-header">
          Your basket ({cart.reduce((acc, item) => acc + item.count, 0)})
        </h1>
        <div className="shopping-cart-items-container">
          {cart.map((item) => (
            <div key={item._id} className="shopping-cart-item-container">
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
                <span>{`£${item.price}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShoppingCartDrawer;
