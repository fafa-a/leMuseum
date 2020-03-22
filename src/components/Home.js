import React, { Component } from "react";

import TheCarousel from "./Carousel";
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
