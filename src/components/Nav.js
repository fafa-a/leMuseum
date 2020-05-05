import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink
          exact
          className="nav__title"
          activeClassName="--current"
          to="/painting"
        >
          Painting
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="nav__title"
          activeClassName="--current"
          to="/sculpture"
        >
          Sculpture
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
