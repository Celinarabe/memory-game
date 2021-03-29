import React from "react";
import "../css/Cards.css";
import Cactus1 from "../img/annie-spratt-fbAnIjhrOL4-unsplash.jpg";
import cactusArr from "../img/";

export default function Cards() {
  return (
    <div>
      {cactusArr.map((value, index) => {
        return <img src={value} alt={`cactus${index}`} />;
      })}
    </div>
  );
}
