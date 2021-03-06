import React from "react";
import Image from "react-bootstrap/Image";
import "../css/Cards.css";

const Cards = (props) => {
  const generateCards = () => {
    return props.cardDeck.map((value, index) => {
      return (
        <Image
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
};

export default Cards;
