import cactusArr from "../img/";

//TO DO: Shuffle function


//TO DO: array of img names, reduce the array to create list of card objects
//card object: id and name (full src path)


export default function initializeDeck() {
  console.log('this is being ran')
  let id=0;
  let cardDeck = []

  let test = [{id: 0, name:'celina'}, {id: 1, name: 'yo'}]
  return test
  
  // cactusArr.reduce((acc, val) => {
  //   let card = {'id': id, 'name': val};
  //   id++
  //   cardDeck.push(card)
  //   return cardDeck
  // }, cardDeck)
}