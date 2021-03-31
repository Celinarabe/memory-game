import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Scoreboard(props) {
  return (
    <div>
      <p>Current Score: {props.score} </p>
      <p>Best Score: {props.highScore} </p>
      <button onClick={props.resetScore}>Reset score</button>
    </div>
  );
}
