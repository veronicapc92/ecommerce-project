import React from "react";
import "./Input.css";

const Input = ({ name, value, placeholder, error, onInput }) => {
  return (
    <div className="input-container">
      <input
        value={value}
        name={name}
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={onInput}
      />
      {error && <div className="validation-error-message">{error}</div>}
    </div>
  );
};

export default Input;
