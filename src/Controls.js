import React from "react";

function Controls(props) {
  console.log(props);
  return (
    <div className="controlBar">
      <button className="reset" onClick={props.resetFunc}>
        Reset Game
      </button>
      <button className="roll" onClick={props.rollFunc}>
        Roll the Dice
      </button>
      <button className="pass" onClick={props.passFunc}>
        Pass
      </button>
    </div>
  );
}

export default Controls;
