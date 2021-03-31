import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //returns current state and async function that updates it
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);

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
    console.log('use effect')
    console.log(selected)
  }, [selected])

  const addScore = () => {
    setScore(score + 1);
  };

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


        <Cards 
        addScore={addScore}
        handleClick={(id) => handleClick(id)} />
      </Container>
    </div>
  );
}

export default App;
