import "./App.css";
import React, { useState } from "react";
import Controls from "./Controls";
import P1 from "./Player1";
import P2 from "./Player2";
import DiceRoll from "./diceRoll";
import Dice1 from "./img/dice-1.png";
import Dice2 from "./img/dice-2.png";
import Dice3 from "./img/dice-3.png";
import Dice4 from "./img/dice-4.png";
import Dice5 from "./img/dice-5.png";
import Dice6 from "./img/dice-6.png";

function App() {
  //Variables

  // all dice images
  const dicePic = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  //player score (static) [p1, p2]
  const [playerScore, setPlayerScore] = useState([2, 3]);
  //current turn roll sum
  const [currentScore, setCurrentScore] = useState([0, 0]);
  //player tracker, simple tern to change player turn 1/0
  const [playerTurn, setPlayerTurn] = useState(0);
  //creating dice roll variable
  const [roll, setRoll] = useState(3);

  //functions

  //logic and code for rolling
  function roller() {
    let roll = Math.ceil(Math.random(1) * 6);
    console.log();
    console.log(roll);
    // roll === 1 ? eTurn() : (currentScore[playerTurn] += roll);
    if (roll === 1) {
      eTurn();
    } else {
      currentScore[playerTurn] += roll;
      setCurrentScore(currentScore);
      setRoll(roll);
    }
    console.log(currentScore[playerTurn]);
  }

  // changes player turn
  function eTurn() {
    console.log(playerTurn);
    currentScore[playerTurn] = 0;
    setCurrentScore(currentScore);
    // playerTurn === 0 ? (setPlayerTurn(1)) : (setPlayerTurn(0));
    setPlayerTurn(playerTurn === 0 ? 1 : 0);
  }

  // this function should save the current score and add + save then end turn
  function pass() {
    console.log(playerScore[playerTurn]);
    playerScore[playerTurn] += currentScore[playerTurn];
    setPlayerScore(playerScore);
    eTurn();
  }

  function reset() {
    setPlayerScore([0, 0]);
    setCurrentScore([0, 0]);
    setPlayerTurn(0);
  }

  return (
    <main>
      <P1 playerScore={playerScore[0]} currentScore={currentScore[0]} />
      <Controls rollFunc={roller} passFunc={pass} resetFunc={reset} />
      <DiceRoll rolled={roll} rolledPic={dicePic} />
      <P2 playerScore={playerScore[1]} currentScore={currentScore[1]} />
    </main>
  );
}

export default App;
