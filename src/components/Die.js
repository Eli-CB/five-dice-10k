import React, { Component } from 'react';

class Die extends Component {

    // constructor(props) {
    //     super(props);
    // }

	state = {
        name: "Die Component",
        roll: 1
	}

    render() {
        return (
            numDiceResult(Math.floor(Math.random() * 6) + 1)
        )
    }


}
 
export default Die;

function numDiceResult (num) {
    if (num === 1) {    
        return (
            <img alt="dice" width="50%" src={"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg"} />
        );
    } else if (num === 2) {
        return (
            <img alt="dice" width="50%" src={"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg"} />
        );
    } else if (num === 3) {
        return (
            <img alt="dice" width="50%" src={"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg"} />
        );
    } else if (num === 4) {
        return (
            <img alt="dice" width="50%" src={"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg"} />
        );
    } else if (num === 5) {
        return (
            <img alt="dice" width="50%" src={"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg"} />
        );
    } else if (num === 6) {
        return (
            <img alt="dice" width="50%" src={"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"} />
        );
    } else {
        return null;
    } 
};