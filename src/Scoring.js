import React from "react";

export const Scoring = props => {
  let totalRollScore = rollScore(props.dice1) +
  rollScore(props.dice2) +
  rollScore(props.dice3) + 
  rollScore(props.dice4) +
  rollScore(props.dice5);
  props.score.push(totalRollScore);
  const totalScore = addTotal(props.score);
  return (
    <h2>
      Roll Score: {totalRollScore} <br></br>
      Total Score: {totalScore}
    </h2>
  );
};

function rollScore (die) {
  if (die === 1) {
    return 100;
  } else if (die === 5) {
    return 50;
  } else {
    return 0;
  } 
};

function addTotal(scoreList) {
  let total = 0;
  for(let i in scoreList) {
    total += scoreList[i];
  }
  return total/2;
}
