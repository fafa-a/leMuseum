import React, { Component } from "react";
import Data from "../data/Data";
import Painter from "./Painter";

class Painting extends Component {
  render() {
    const { Painters } = Data[0];

    return (
      <div className="containerz">
        {Painters.map((painter, index) => (
          <Painter post={painter} key={index} />
        ))}
      </div>
    );
  }
}
export default Painting;
