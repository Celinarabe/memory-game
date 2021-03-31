import React from "react";
import "../css/Cards.css";
import cactusArr from "../img/";

export default function Cards(props) {


  return (
    <div>
      <ul>
        {cactusArr.map((value, index) => {
          return <img key={index} src={value} alt={`cactus${index}`} onClick={() => props.handleClick(index)} />;
        })}
      </ul>
    </div>
  );
}
