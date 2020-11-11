import React from "react";

export const Interface = props => {
  return (
    <>
      <img
        alt="choose"
        onClick={props.startGame}
        style={{ cursor: "pointer" }}
        width="10%"
        src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg"
      />
      <span style={{ cursor: "pointer" }} onClick={props.clearState}>
        Clear
      </span>
      {/* <div className="table" style={{ fontSize: "30px" }}>
        Total Score: {props.totalScore}
      </div> */}
      Games: {props.games}
    </>
  );
};