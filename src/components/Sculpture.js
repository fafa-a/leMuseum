import React, { Component } from "react";

class Sculpture extends Component {
  render() {
    return this.props.name.map(sculptor => (
      <h1 key={sculptor.id}>
        {sculptor.firstName} {sculptor.lastName}
      </h1>
    ));
  }
}

export default Sculpture;
