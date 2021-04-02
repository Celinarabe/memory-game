import cactusArr from "../img/";

function initializeDeck() {
  //map passes currentVal, idx
  return cactusArr.map((img, id) => {
    return { id, img };
  });
}

export default initializeDeck;
