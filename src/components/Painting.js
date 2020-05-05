import React, { Component } from "react";
import Data from "../data/Data";
import Painters from "./Painters";

class Painting extends Component {
  render() {
    return (
      <div className="containerz">
        {Data[0].Painters.map((painter, index) => (
          <Painters post={painter} key={index} />
        ))}
      </div>
    );
  }
}
export default Painting;
