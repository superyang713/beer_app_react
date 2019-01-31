import React, {Component} from "react";
import "./Header.css";
import logo from "./logo.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="logo"><img src={logo}/></div>
        </div>
      </div>
    );
  }
}

export default Header;
