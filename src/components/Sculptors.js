import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sculptors extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link
          to={{
            pathname: "/artist/" + post.lastName,
            search: "?id=" + post.id,
            hash: "#Sculptors",
          }}
          key={post.id}
        >
          {post.firstName}&nbsp;
          {post.lastName}
          <img key={post.id} src={post.profilePic} alt="" width="100" />
        </Link>
      </div>
    );
  }
}

export default Sculptors;
