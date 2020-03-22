import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";
import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="nav-container">
          <Menu />
          <nav>
            <ul>
              <NavLink exact activeClassName="current" to="/pop-art">
                <li className="nav-title">Pop art</li>
              </NavLink>
              <NavLink exact activeClassName="current" to="/classic-art">
                <li className="nav-title">Classic art</li>
              </NavLink>
            </ul>
          </nav>
          <Socials />
        </div>
      </header>
    );
  }
}

export default Header;
