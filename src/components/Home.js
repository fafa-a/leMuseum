import React, { Component, Fragment } from "react";

import Carousel from "./Carousel";
import Socials from "./Socials";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="homeItems">
          <div className="catchPhrase">
            <p className="">"Art is either revolution or plagiarism"</p>
            <p>PAUL GAUGUIN</p>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        <div>
            <Socials />
        </div>
      </Fragment>
    );
  }
}

export default Home;