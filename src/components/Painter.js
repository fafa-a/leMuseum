import React from "react";
import { Link } from "react-router-dom";

const Painters = (props) => {
  const { post } = props;
  const {
    id,
    firstName,
    lastName,
    profilePic,
    artwork,
    description,
    site,
  } = post;

  const path = {
    pathname: "/artist/" + lastName,
    search: "?id=" + id,
    hash: "#Painters",
  };

  const wikiUrl = `https://en.wikipedia.org/wiki/${
    firstName == null ? lastName : firstName + "_" + lastName
  }`;

  return (
    <div className="link">
      <div className="kard">
        <Link to={path}>
          <figure className="kard__img">
            <img
              key={id}
              src={profilePic}
              alt={
                firstName === null ? "" + lastName : firstName + " " + lastName
              }
            />
          </figure>
        </Link>
        <article className="kard__content">
          <div className="kard__head">
            <Link to={path}>
              <h3 className="kard__name">
                {post.firstName === null
                  ? lastName
                  : firstName + " " + lastName}
              </h3>
            </Link>
            <div className="kard__icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={wikiUrl}
                onClick={() => window.open(`${wikiUrl}`, "_blank")}
              >
                <div className="icon-container">
                  <i className="fab fa-wikipedia-w"></i>
                </div>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={site}
                onClick={() => window.open(`${site}`, "_blank")}
              >
                <div className="icon-container">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
            </div>
          </div>
          <Link to={path}>
            <p className="kard__descrition">{description}</p>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Painters;
