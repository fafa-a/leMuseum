import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/Data";

function Artist() {
  let { slug } = useParams();
  let url = new URL(window.location);
  let params = url.searchParams.get("id");
  let id = parseInt(params, 10);
  let result = id - 1;
  let Data = data[0].Painters[result];

  return (
    <div>
      <h1>{slug} Artwork</h1>
      <figure className="artist-img">
        {Data.artwork.map((artwork, index) => (
          <img
            key={"key" + index}
            src={artwork}
            alt=""
            className="artwork col-4"
          />
        ))}
      </figure>
    </div>
  );
}
export default Artist;
