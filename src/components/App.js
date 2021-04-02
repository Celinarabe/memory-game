import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import initializeDeck from "../helpers/initializeDeck";
import shuffleDeck from "../helpers/shuffleDeck";

function App() {
  //useState returns current state and async function to update state
  const [cards, setCards] = useState(initializeDeck());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);

  //on component did mount, initialize deck
  useEffect(() => {
    console.log("initializing card deck", cards);
  });

  //FOR TESTING TO SEE THE CARDS STATE
  useEffect(() => {
    console.log("change to card deck", cards);
    console.log(cards[0].img);
  }, [cards]);

  //checking if card has already been clicked (is in selected array)
  const handleClick = (id) => {
    setCards(shuffleDeck(cards));
    if (selected.includes(id)) {
      console.log("already includes");
      resetGame();
    } else {
      addScore();
      setSelected((selected) => [...selected, id]);
    }
  };

  //FOR TESTING TO SEE SELECTED ARRAY STATE
  useEffect(() => {
    console.log("change to selected array", selected);
  }, [selected]);

  const addScore = () => {
    setScore(score + 1);
  };

  //TO DO: need to clear the selected array once the score is reset
  const resetGame = () => {
    setScore(0);
    setSelected([]);
  };

  //similar to the componentdidupdate function. the score updater is asynchronous so the state won't be updated until the next render
  //state updates will reflect in the next re-render
  //if you want to perform an action based on state change, you need to use useEffect hook
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div>
      <Container className="text-center">
        <h1>Memory Card Game</h1>
        <Scoreboard score={score} highScore={highScore} resetGame={resetGame} />

        <Cards
          cardDeck={cards}
          addScore={addScore}
          handleClick={(id) => handleClick(id)}
        />
      </Container>
    </div>
  );
}

export default App;
