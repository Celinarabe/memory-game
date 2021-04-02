import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Scoreboard = (props) => {
  return (
    <div>
      <p>Current Score: {props.score} </p>
      <p>Best Score: {props.highScore} </p>
    </div>
  );
};

export default Scoreboard;
