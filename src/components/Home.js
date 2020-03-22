import React, { Component } from "react";

import Carousel from "./Carousel";
import Socials from "./Socials";
import Quote from "./Quote";

class Home extends Component {
  render() {
    return (
      <div className="homeItems">
        <Quote />
        <Carousel />
      </div>
    );
  }
}

export default Home;
