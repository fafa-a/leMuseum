import React, { Component } from "react";
import { Link } from "react-router-dom";

class Painters extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link to={"/artist/" + post.lastName} key={post.id}>
          {post.firstName}&nbsp;
          {post.lastName}
        </Link>
      </div>
    );
  }
}

export default Painters;
