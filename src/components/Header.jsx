import React from "react";
import { Link } from "react-router-dom";
import logo from "../LOGO.svg";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link className="link" to="/">
          <img src={logo} className="logo" alt="logo" />
          <h2 className="next">Next Steps</h2>
          <p>We're Here to Help</p>
        </Link>
        <Link to="/about/">
          <h2 className="h2">About Us</h2>
        </Link>
        <Link to="/resources/">
          <h2 className="h2">Resources</h2>
        </Link>
      </div>
    );
  }
}

export default Header;
