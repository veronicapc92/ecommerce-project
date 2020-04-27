import React, { Component } from "react";

class Logout extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  render() {
    return (
      <div>
        <i class="fas fa-sign-out-alt" onClick={this.handleLogout}></i>
      </div>
    );
  }
}

export default Logout;
