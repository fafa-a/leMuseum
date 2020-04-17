import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/Data";
import Slider from "./Slider";

function Artist() {
  const { slug } = useParams();
  const url = new URL(window.location);
  const speciality = url.hash.substr(1);
  const params = url.searchParams.get("id");
  const id = parseInt(params, 10);
  const result = id - 1;
  const Data = data[0][speciality][result];

  return <Slider data={Data} key={Data.id} />;
}
export default Artist;
