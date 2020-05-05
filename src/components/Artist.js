import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/Data";

function Artist() {
  let { slug } = useParams();
  let url = new URL(window.location);
  let speciality = url.hash.substr(1);
  let params = url.searchParams.get("id");
  let id = parseInt(params, 10);
  let result = id - 1;
  let Data = data[0][speciality][result];

  return (
    <div className="artist-div">
      <h1 className="artist-h1">{slug} Artwork</h1>
      <figure className="artist-img">
        {console.log(params)}
        {console.log(speciality)}
        {Data.artwork.map((artwork, index) => (
          <img key={"key" + index} src={artwork} alt="" className="artwork" />
        ))}
      </figure>
    </div>
  );
}
export default Artist;
