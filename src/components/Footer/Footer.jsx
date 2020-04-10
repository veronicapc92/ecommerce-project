import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="icons-container">
      <div className="social-media-icon">
        <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
      </div>
      <div className="social-media-icon">
        <i className="fa fa-pinterest-p fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Footer;
