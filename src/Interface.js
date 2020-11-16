import React from "react";

export const Interface = props => {
  return (
    <>
       <span style={{ cursor: "pointer" }} onClick={props.clearState}>
        Restart 
      </span>
      <img
        alt="choose"
        onClick={props.rollDice}
        style={{ cursor: "pointer" }}
        width="10%"
        src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg"
      />
      <span style={{ cursor: "pointer" }} onClick={props.endTurn}>
        End Turn
      </span>
      <div className="table" style={{ fontSize: "20px" }}>
        Rolls: {props.rollsCount} &nbsp;
        Turns: {props.turnsCount}
      </div>
    </>
  );
};