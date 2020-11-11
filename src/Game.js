import React from "react";

export const Game = props => {
  const { dice1, dice2, dice3, dice4, dice5 } = props.results;

  if (dice3) {
    return <h1 className="won">You Won!</h1>;
  } else if (dice1 === "") {
    return <h1>Start Game!</h1>;
  } else {
    return <h1 className="draw">Draw</h1>;
  }
};