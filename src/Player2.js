import React from "react";

function P2(props) {
  return (
    <div className="player- split right -centered player--2">
      <div className="centered container">
        <h2 className="name" id="name--2">
          Player 2
        </h2>
        <p className="score" id="score--2">
          {props.playerScore}
        </p>
        <p className="current-label">Current</p>
        <p className="current-score" id="current--2">
          {props.currentScore}
        </p>
      </div>
    </div>
  );
}

export default P2;
