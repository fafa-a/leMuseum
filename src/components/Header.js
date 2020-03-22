import React, { Component } from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <nav>
          <ul>
            <Link to="/">
              <li>
                <i className="fas fa-home"></i>
              </li>
            </Link>
            <Link to="/pop-art">
              <li className="nav-item">POP ART</li>
            </Link>
            <Link to="/classic-art">
              <li className="nav-item">CLASSIC ART</li>
            </Link>
          </ul>
        </nav>
        <Socials />

        {/* <div>LE MUSEUM</div>
            <div>SOMETHING ABOUT ART</div>
            <div>CAROUSEL</div>
            <div>SOCIALS</div> */}
      </header>
    );
  }
}

export default Header;
