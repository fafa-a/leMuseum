import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Sculptors extends Component {
  render() {
    const { post } = this.props;
    const wikiUrl = `https://en.wikipedia.org/wiki/
                    ${
      post.firstName == null
        ? post.lastName
        : post.firstName + "_" + post.lastName &&
          post.lastName === "Jenkins"
          ? post.firstName + "_" + post.lastName + "_(artist)"
          : null
      }`;

    return (
      <Link
        to={{
          pathname: "/artist/" + post.lastName,
          search: "?id=" + post.id,
          hash: "#Sculptors",
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
          <article className="kard__content">
            <div className="kard__head">
              <h3 className="kard__name">
                {post.firstName == null
                  ? post.lastName
                  : post.firstName + " " + post.lastName}
              </h3>

              <div className="kard__icon">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={wikiUrl}
                  onClick={<Redirect to={this.href} />}
                >
                  <div className="icon-container">
                    <i className="fab fa-wikipedia-w"></i>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={post.site}
                  onClick={<Redirect to={this.href} />}
                >
                  <div className="icon-container">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </a>
              </div>
            </div>
            <p className="kard__descrition">{post.description}</p>
          </article>
        </div>
      </Link>
    );
  }
}

export default Sculptors;
