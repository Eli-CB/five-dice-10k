import React from "react";

export const YourResult = props => {
    const { one, two, three, four, five, six, dice1, dice2, dice3, dice4, dice5 } = props.allstates;
  
    return (
        <div className="result">
            {numDiceResult(dice1, one, two, three, four, five, six)}
            {numDiceResult(dice2, one, two, three, four, five, six)}
            {numDiceResult(dice3, one, two, three, four, five, six)}
            {numDiceResult(dice4, one, two, three, four, five, six)}
            {numDiceResult(dice5, one, two, three, four, five, six)}
        </div>
    );
};

function numDiceResult (num, one, two, three, four, five, six) {
    if (num === 1) {    
        return (
            <input type="image" alt="dice" width="50%" src={one} />
        );
    } else if (num === 2) {
        return (
            <input type="image" alt="dice" width="50%" src={two}  />
        );
    } else if (num === 3) {
        return (
            <input type="image" alt="dice" width="50%" src={three} />
        );
    } else if (num === 4) {
        return (
            <input type="image" alt="dice" width="50%" src={four} />
        );
    } else if (num === 5) {
        return (
            <input type="image" alt="dice" width="50%" src={five} />
        );
    } else if (num === 6) {
        return (
            <input type="image" alt="dice" width="50%" src={six} />
        );
    } else {
        return null;
    } 
};