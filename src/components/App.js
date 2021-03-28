
import Scoreboard from "./Scoreboard";
import Cards from "./Cards"
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Container className="text-center">
        <h1 >Memory Card Game</h1>
        <Scoreboard />
        <Cards />
        
      </Container>
    </div>
  );
}

export default App;
