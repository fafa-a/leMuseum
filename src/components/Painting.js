<<<<<<< HEAD
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
=======
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
>>>>>>> 0237a05263eca55abce57b9188647b21ca53e4ca
