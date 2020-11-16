import React from "react";

export const Scoring = props => {
  let roll = [props.dice1, props.dice2, props.dice3, props.dice4, props.dice5];

  let trueTotalRollScore = trueRollScore(roll);


  if (props.dice1 === "") {
    return <h1>Start Game!</h1>;

  } else if(trueTotalRollScore === 0) {
    return (
      <div>
        <h2>
          Roll Score: {trueTotalRollScore} &nbsp;
          Turn Score: {props.turnScore} &nbsp;
          Total Score: {props.totalScore}
        </h2>
        <h1 className="lost">Rolled a 0! Turn finished.</h1>
      </div>
    );

  } else if ((props.totalScore + props.turnScore) === 10000) {
    return (
      <div>
        <h2>
          Roll Score: {trueTotalRollScore} &nbsp;
          Turn Score: {props.turnScore} &nbsp;
          Total Score: {props.totalScore}
        </h2>
        <h1 className="won">You Won!</h1>
      </div>
    );

  } else if ((props.totalScore + props.turnScore) > 10000) {
    props.overScored(trueTotalRollScore);
    return (
      <div>
        <h2>
          Roll Score: {trueTotalRollScore} &nbsp;
          Turn Score: {props.turnScore} &nbsp;
          Total Score: {props.totalScore}
        </h2>
        <h1 className="draw">Over target score, try again.</h1>
      </div>
    );

  } else {
    props.updateTurnScore(trueTotalRollScore);
    return (
      <h2>
        Roll Score: {trueTotalRollScore} &nbsp;
        Turn Score: {props.turnScore} &nbsp;
        Total Score: {props.totalScore}
      </h2>
    );
  }
};

// TODO: unpack ofAKind, fullHouse, and straight checks into their own functions
function trueRollScore (dice) {
  let result = 0;
  dice.sort();
  for(let i = 0; i < dice.length; i++) {
    // if there is 3-of-a-kind
    if((dice[i] === dice[i+1]) && (dice[i] === dice[i+2])) {
      let k = i;
      // if there is 4-of-a-kind
      if(dice[k] === dice[k+3]) {
        result += dice[k] * 100 * 2;
        // if there is 5-of-a-kind
        if(dice[k] === dice[k+4]) {
          // if that 5-of-a-kind is a one
          if(dice[k] === 1) {
            return dice[k] * 1000 * 2 * 2;
          }
          return dice[k] * 100 * 2 * 2;
        }
        i += 3;
      // if there is a full house
      } else if(((dice[0] === dice[1]) && k === 2) || ((dice[4] === dice[3]) && k === 0)) {
        if(k === 2) {
          result = dice[0] * 100;
        } else if (k === 0) {
          result = dice[4] * 100;
        }
        if (dice[k] === 1) {
          result += 1000;
        } else {
          result += dice[k] * 100;
        }
        return result;
      } else {
        result += dice[i] * 100;
        i += 2;
      }
      // if the die is a one
      if(dice[k] === 1) {
        result = result * 10;
      }
    // if there is a small straight
    } else if(dice.includes(dice[i] + 1) && dice.includes(dice[i] + 2) && dice.includes(dice[i] + 3)) {
      // if there is a large straight
      if(dice.includes(dice[i] + 4)) {
        return 500;
      }
      delete dice[dice.indexOf(dice[i] + 3)];
      delete dice[dice.indexOf(dice[i] + 2)];
      delete dice[dice.indexOf(dice[i] + 1)];
      delete dice[dice.indexOf(dice[i])];

      for(let j = 0; j < dice.length; j++) {
        if (dice[j] === 1) {
          result = 100;
        } else if (dice[j] === 5) {
          result = 50;
        }
      }
      result += 250;
      return result;
    // if the die is a 1
    } else if(dice[i] === 1) {
      result += 100;
    // if the die is a 5
    } else if(dice[i] === 5) {
      result += 50;
    }
  }
  return result;
}
