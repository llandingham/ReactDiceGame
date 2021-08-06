import React from "react";

//This should return the picture of the coresponding dice roll
function DiceRoll(props) {
  if (props.rolled === 1) {
    return (
      <div className="dice img controlBar">
        <img rolled={props.rolledPic[0]} alt={props.rolled} />
      </div>
    );
  } else {
    return (
      <div className="dice img controlBar">
        <img src={props.rolledPic[props.rolled - 1]} alt={props.rolled} />
      </div>
    );
  }
}

export default DiceRoll;
