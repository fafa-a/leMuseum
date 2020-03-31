import React, { Component } from "react";

class Painting extends Component {
  render() {
    return this.props.name.map(painter => (
      <h1 key={painter.id}>
        {painter.firstName} {painter.lastName}
      </h1>
    ));
  }
}

export default Painting;
