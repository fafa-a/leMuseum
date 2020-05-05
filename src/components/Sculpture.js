import React, { Component } from "react";
import Data from "../data/Data";
import Sculptors from "./Sculptors";

class Sculpture extends Component {
  render() {
    return (
      <div>
        {Data[0].Sculptors.map(
          (sculptor, { id, firstName, lastName, profilePic }) => (
            <Sculptors post={sculptor} key={sculptor.id} />
          )
        )}
      </div>
    );
  }
}

export default Sculpture;
