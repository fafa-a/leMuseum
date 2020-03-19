import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
    render(){
      return (

          <header className="App-header">

            <nav>
              <ul>
                <Link to="/pop-art">
                  <li className="nav-item">POP ART</li>
                </Link>
                <Link to="/classic-art">
                  <li className="nav-item">CLASSIC ART</li>
                </Link>
              </ul>
            </nav>

            {/* <div>LE MUSEUM</div>
            <div>SOMETHING ABOUT ART</div>
            <div>CAROUSEL</div>
            <div>SOCIALS</div> */}

          </header>

      );
    }
  }
  
  export default Header;
  