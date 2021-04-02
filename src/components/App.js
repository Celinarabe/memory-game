import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import initializeDeck from "../helpers/initializeDeck";
import shuffleDeck from "../helpers/shuffleDeck";

function App() {
  //useState returns current state and async function to update state
  const [cards, setCards] = useState(initializeDeck());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);

  //checking if card has already been clicked (is in selected array)
  const handleClick = (id) => {
    setCards(shuffleDeck(cards));
    if (selected.includes(id)) {
      resetGame();
    } else {
      addScore();
      setSelected((selected) => [...selected, id]);
    }
  };

  const addScore = () => {
    setScore(score + 1);
  };

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
