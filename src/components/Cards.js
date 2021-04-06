import React from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Cards.css";

function Cards(props) {
  const cardArr = props.cardDeck;
  const generateCards = (arr) => {
    return arr.map((value, index) => {
      return (
        <Col className="px-0 mx-0">
          <Image
            key={value.id}
            src={value.img}
            alt={`cactus${value.id}`}
            onClick={() => props.handleClick(value.id)}
          />
        </Col>
      );
    });
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          {generateCards(cardArr.slice(0, 3))}
        </Row>
        <Row>{generateCards(cardArr.slice(3, 6))}</Row>
        <Row>{generateCards(cardArr.slice(6, 9))}</Row>
      </Container>
    </div>
  );
}

export default Cards;
