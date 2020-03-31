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
              <NavLink exact activeClassName="current" to="/painting">
                <li className="nav-title">Painting</li>
              </NavLink>
              <NavLink exact activeClassName="current" to="/sculpture">
                <li className="nav-title">Sculpture</li>
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
