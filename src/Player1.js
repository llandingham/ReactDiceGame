import React from "react";

function P1(props) {
  return (
    <div className="player- split left player--0 player--active">
      <div className="centered container">
        <h2 className="name" id="name--0">
          Player 1
        </h2>
        <p className="score" id="score--0">
          {props.playerScore}
        </p>
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {props.currentScore}
        </p>
      </div>
    </div>
  );
}

export default P1;
