import React from "react";
import "./backdrop.css";

const Backdrop = ({ onBackdropClick }) => {
  return <div onClick={onBackdropClick} className="backdrop"></div>;
};

export default Backdrop;
