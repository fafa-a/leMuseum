import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = {
    showMenu: false,
  };

  showMenu = (e) => {
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
        <div className="menu__title" onClick={this.showMenu}>
          Menu
          <i className="fas fa-caret-down menu__triangle"></i>
        </div>
        {this.state.showMenu ? (
          <div className="menu__dropdown">
            <Link to="/" className="menu__dropdown__item">
              Home
            </Link>
            <Link to="/painting" className="menu__dropdown__item">
              Painting
            </Link>
            <Link to="/sculpture" className="menu__dropdown__item">
              Sculpture
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Menu;
