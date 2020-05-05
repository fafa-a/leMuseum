import React, { Component } from "react";
import Socials from "./Socials";
import Menu from "./Menu";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Menu />
        <nav>
          <Nav />
        </nav>
        <Socials />
      </header>
    );
  }
}

export default Header;
