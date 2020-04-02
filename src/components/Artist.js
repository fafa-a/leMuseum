import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data/Data";

function Artist() {
  let { slug } = useParams();

  return (
    <div>
      <h1>{slug} Artwork</h1>

      {/* <img key={post.id} src={post.profilePic} alt="" /> */}
    </div>
  );
}
export default Artist;
