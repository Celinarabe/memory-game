import React from "react";
import "../css/Cards.css";

function Cards(props) {
  const generateCards = () => {
    return props.cardDeck.map((value, index) => {
      return (
        <img
          key={value.id}
          src={value.img}
          alt={`cactus${value.id}`}
          onClick={() => props.handleClick(value.id)}
        />
      );
    });
  };

  return (
    <div>
      <ul>{generateCards()}</ul>
    </div>
  );
}

export default Cards;
