import React, { Component } from "react";

import TheCarousel from "./Carousel";
import Quote from "./Quote";

class Home extends Component {
  render() {
    return (
      <div className="home-items">
        <Quote />
        <TheCarousel />
      </div>
    );
  }
}

export default Home;
