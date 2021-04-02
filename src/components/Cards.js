import React from "react";
import "../css/Cards.css";
import cactusArr from "../img/";

export default function Cards(props) {


  return (
    <div>
      <ul>
      {props.cardDeck.map((value, index) => {
          return <img key={value.id} src={value.name} alt={`cactus${value.id}`} onClick={() => props.handleClick(value.id)} />;
        })}
      </ul>
    </div>
  );
}
 