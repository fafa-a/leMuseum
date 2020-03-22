import React, { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
  state = {
    showMenu: false
  };

  showMenu = e => {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  render() {
    return (
      <div className="menu">
        <div className="nav-title cursor" onClick={this.showMenu}>
          Menu
          <i class="fas fa-caret-down i-colored"></i>
        </div>
        {this.state.showMenu ? (
          <div className="menu-item">
            <Link to="/"> Home </Link>
            <Link to="/pop-art"> Pop art </Link>
            <Link to="/classic-art"> Classic art</Link>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Menu;
