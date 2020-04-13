import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Socials from "./Socials";
import Menu from "./Menu";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header>
        {/* <div className="nav-container"> */}
        <Menu />
        <Nav />
        <Socials />
        {/* </div> */}
      </header>
    );
  }
}

export default Header;
