import React from "react";

export const Ranking = props => {
  if (props.dice1 === 1) {
    return (
      <h2>
        score: {props.score}
      </h2>
    );
  } else if (props.dice2 === 1) {
    return (
      <h2>
        score: {props.score}
      </h2>
    );
  } else if (props.dice3 === 1) {
    return (
      <h2>
        score: {props.score}
      </h2>
    );
  } else if (props.dice4 === 1) {
    return (
      <h2>
        score: {props.score}
      </h2>
    );
  } else {
    return null;
  }
};