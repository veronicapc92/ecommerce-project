import React from "react";

const Logout = () => {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/";
  }

  return (
    <div>
      <i className="fas fa-sign-out-alt" onClick={handleLogout}></i>
    </div>
  );
};

export default Logout;
