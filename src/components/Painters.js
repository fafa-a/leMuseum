import React, { Component } from "react";
import { Link } from "react-router-dom";

class Painters extends Component {
  render() {
    const { post } = this.props;

    return (
      <Link
        to={{
          pathname: "/artist/" + post.lastName,
          search: "?id=" + post.id,
          hash: "#Painters",
        }}
        key={post.id}
        className="link"
      >
        <div className="kard">
          <figure className="kard__img">
            <img
              key={post.id}
              src={post.profilePic}
              alt={
                post.firstName == null
                  ? "" + post.lastName
                  : post.firstName + " " + post.lastName
              }
            />
          </figure>
          <h3 className="kard__name">
            {post.firstName == null
              ? post.lastName
              : post.firstName + " " + post.lastName}
          </h3>
          <p className="kard__descrition">{post.description}</p>
        </div>
      </Link>
    );
  }
}

export default Painters;
