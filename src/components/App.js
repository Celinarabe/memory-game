import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import initializeDeck from '../helpers/initializeDeck';

function App() {
  //returns current state and async function that updates it
  const [cards, setCards] = useState([{}])
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);


  //on component did mount, initialize deck
  useEffect(() => {
    setCards(initializeDeck())
    console.log('card deck',cards)
  }, [])

  //FOR TESTING TO SEE THE CARDS
  useEffect(() => {
    console.log('card deck',cards)
    console.log(cards[0].name)
  }, [cards])


  //TO DO: shuffle the card positions on each click
  const handleClick = (id) => {
    if (selected.includes(id)){
      console.log('already includes')
      resetScore()
    } else {
      addScore()
    }
    setSelected(selected => [...selected, id])
  }


  useEffect(() => {
    console.log('runs once we add to selected')
    console.log(selected)
  }, [selected])

  

  const addScore = () => {
    setScore(score + 1);
  };

  //TO DO: we need to clear the selected array once the score is reset
  const resetScore = () => {
    setScore(0);
  }


  //similar to the componentdidupdate function. the score updater is asynchronous so the state won't be updated until the next render
  //state updates will reflect in the next re-render
  //if you want to perform an action based on state change, you need to use useEffect hook
  useEffect(() => {
    if (score > highScore){
      setHighScore(score);
    }
  }, [score])


  return (
    <div>
      <Container className="text-center">
        <h1>Memory Card Game</h1>
        <Scoreboard score={score} highScore={highScore} resetScore={resetScore} />
        {/* <p>{cards[0].id}</p> */}


        <Cards 
        addScore={addScore}
        handleClick={(id) => handleClick(id)} />
      </Container>
    </div>
  );
}

export default App;
