import React, { Component } from "react";
import Data from "../data/Data";
import Sculptors from "./Sculptors";

class Sculpture extends Component {
  render() {
    return (
      <div className="containerz">
        {Data[0].Sculptors.map((sculptor, index) => (
          <Sculptors post={sculptor} key={index} />
        ))}
      </div>
    );
  }
}

export default Sculpture;
