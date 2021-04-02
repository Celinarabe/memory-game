import cactusArr from "../img/";

//TO DO: Shuffle function

//TO DO: array of img names, reduce the array to create list of card objects
//card object: id and name (full src path)

function initializeDeck() {
  //map passes currentVal, idx
  return cactusArr.map((img, id) => {
    return { id, img };
  });
}

export default initializeDeck;
