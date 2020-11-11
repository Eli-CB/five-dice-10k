import React from "react";

export const Game = props => {
  const { dice1, score } = props.results;

  if (score === 10000) {
    return <h1 className="won">You Won!</h1>;
  } else if (score >= 10000) {
    return <h1>Over Score, Try again</h1>;
  } else if (dice1 === "") {
    return <h1>Start Game!</h1>;
  } else {
    return <h1> </h1>;
  }
};