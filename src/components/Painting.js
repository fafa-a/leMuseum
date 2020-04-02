import React, { Component } from "react";
import Data from "../data/Data";
import Painters from "./Painters";

class Painting extends Component {
  render() {
    return (
      <div>
        {Data[0].Painters.map(
          (painter, { id, firstName, lastName, profilePic }) => (
            <Painters post={painter} key={painter.id} />
          )
        )}
      </div>
    );
  }
}
export default Painting;
