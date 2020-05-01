import React from "react";

const AuthIcon = ({ onSignInIconClick }) => {
  return (
    <div onClick={onSignInIconClick}>
      <i className="fas fa-user-circle fa-lg"></i>
    </div>
  );
};

export default AuthIcon;
