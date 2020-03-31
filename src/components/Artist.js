import React, { Component } from "react";

import Painting from "./Painting";
import Sculpture from "./Sculpture";

class Artist extends Component {
  state = {
    painters: [
      {
        id: 1,
        firstName: null,
        lastName: "Bansky"
      },
      {
        id: 2,
        firstName: "Jeam-Michel",
        lastName: "Basquiat"
      },
      {
        id: 3,
        firstName: "Shepard",
        lastName: "Fairey"
      }
    ],
    sculptors: [
      {
        id: 1,
        firstName: null,
        lastName: "Kaws"
      },
      {
        id: 2,
        firstName: "Mark",
        lastName: "Jerkins"
      }
    ]
  };

  render() {
    return (
      <div>
        {URL !== "/sculpture" ? (
          <Painting name={this.state.painters} />
        ) : (
          <Sculpture name={this.state.sculptors} />
        )}
      </div>
    );
  }
}

export default Artist;
