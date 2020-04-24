import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="icons-container">
      <div className="social-media-icon">
        <i className="fab fa-facebook-f fa-lg" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fab fa-twitter fa-lg" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fab fa-youtube fa-lg" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fab fa-pinterest-p fa-lg" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Footer;
