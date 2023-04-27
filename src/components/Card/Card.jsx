import React from "react";
import CardStyle from "./CardStyles";
import { capitalizeFirstLetter } from "../../utils";

function Card({ image, name, number , types}) {

  return (
    <CardStyle color={types[0].type.name}>
      <div className="contain-img">
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="contain-text">
        <h4><span>#{number}</span> {capitalizeFirstLetter(name)} </h4>
        <p>{types?.map((type) => capitalizeFirstLetter(type.type.name)).join(", ")}</p>
      </div>
      
    </CardStyle>
  );
}

export default Card;
