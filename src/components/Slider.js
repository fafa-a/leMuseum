import React, { Component } from "react";

class Slider extends Component {
  render() {
    const { data } = this.props;
    const name = `${
      data.firstName == null ? data.lastName : data.firstName + data.lastName
    }`;

    return (
      <div className="slider-content">
        <div className="slider">
          <div className="arrows">
            <span>
              <i className="fas fa-long-arrow-alt-left"></i>
            </span>
          </div>

          <div className="slider__inner">
            <div className="slider__inner__image">
              <ul>
                {data.artwork.map((item, index) => (
                  <li key={index}>
                    <img key={"key" + index} src={item.src} alt={item.alt} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="slider__inner__content">
              <ul>
                {data.artwork.map((item, index) => (
                  <li key={index}>
                    <div className="content__inner">
                      <p className="alt"> {item.alt} </p>
                      <h3 className="name"> {name} </h3>
                      <h4 className="details">
                        {item.location + " " + item.year}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="arrows arrows__right">
            <span>
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
