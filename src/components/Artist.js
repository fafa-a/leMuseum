import React, { Component } from "react";

import data from "../data/Data";
import Slider from "./Slider";

class Artist extends Component {
  render() {
    const url = new URL(window.location);
    const speciality = url.hash.substr(1);
    const params = url.searchParams.get("id");
    const id = parseInt(params, 10);
    const result = id - 1;
    const Data = data[0][speciality][result];

    return <Slider post={Data} key={Data.id} />;
  }
}
export default Artist;
