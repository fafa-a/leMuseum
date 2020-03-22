import React, { Component } from "react";

import TheCarousel from "./Carousel";
import Socials from "./Socials";
import Quote from "./Quote";

class Home extends Component {
  render() {
    return (
      <div className="homeItems">
        <Quote />
        <TheCarousel />
      </div>
    );
  }
}

export default Home;
