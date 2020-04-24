import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");

    window.location = "/";
  }

  render() {
    return <i class="fas fa-sign-out-alt"></i>;
  }
}

export default Logout;
