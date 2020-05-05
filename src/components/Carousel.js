import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class TheCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextIcon: null,
      prevIcon: null,
      indicators: null,
    };
  }

  render() {
    const { nextIcon, prevIcon, indicators } = this.state;
    return (
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon} indicators={indicators}>
        <Carousel.Item>
          <img
            className="carouselImg d-block w-100"
            src={require("../images/Kaws/Kaws1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>KAWS1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block w-100"
            src={require("../images/la-grande-vague.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>KAWS1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block w-100"
            src={require("../images/Kaws/Kaws2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>KAWS2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block w-100"
            src={require("../images/lalaitiere.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>KAWS1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block w-100"
            src={require("../images/Kaws/Kaws3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>KAWS3</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block w-100"
            src={require("../images/mount-fuji-red.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>KAWS1</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default TheCarousel;
