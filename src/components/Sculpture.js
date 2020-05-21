import React, { Component } from "react";
import Data from "../data/Data";
import Sculptor from "./Sculptor";

class Sculpture extends Component {
  render() {
    const { Sculptors } = Data[0];

    return (
      <div className="containerz">
        {Sculptors.map((sculptor, index) => (
          <Sculptor post={sculptor} key={index} />
        ))}
      </div>
    );
  }
}

export default Sculpture;
