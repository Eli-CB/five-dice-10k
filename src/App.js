import React from "react";
import { Interface } from "./Interface";
import { YourResult } from "./YourResult";
import { Scoring } from "./Scoring";
import "./App.css";

class App extends React.Component {
  state = {
    rollsCount: 0,
    turnsCount: 0,
    rollScore: 0,
    turnScore: 0,
    totalScore: 0,
    dice1: "",
    dice2: "",
    dice3: "",
    dice4: "",
    dice5: "",
    one: 
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    two:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    three:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    four:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    five:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    six:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"
  };

  rollDice = () => {
    this.setState({
      // TODO - if a die is selected do not roll 
      dice1: Math.floor(Math.random() * 6) + 1,
      dice2: Math.floor(Math.random() * 6) + 1,
      dice3: Math.floor(Math.random() * 6) + 1,
      dice4: Math.floor(Math.random() * 6) + 1,
      dice5: Math.floor(Math.random() * 6) + 1,
      rollsCount: this.state.rollsCount + 1,
      turnsCount: this.state.turnsCount,
      turnScore: this.state.turnScore,
      totalScore: this.state.totalScore,
    });

  };

  updateTurnScore = (score) => {
    this.state.turnScore = score;
  };
 
  endTurn = () => {
    this.setState({
      dice1: Math.floor(Math.random() * 6) + 1,
      dice2: Math.floor(Math.random() * 6) + 1,
      dice3: Math.floor(Math.random() * 6) + 1,
      dice4: Math.floor(Math.random() * 6) + 1,
      dice5: Math.floor(Math.random() * 6) + 1,
      rollsCount: this.state.rollsCount + 1,
      turnsCount: this.state.turnsCount + 1,
      turnScore: 0,
      totalScore: this.state.totalScore + this.state.turnScore
    });
  };

  overScored = (score) => {
    this.state.turnScore -= score;
  }

  clearState = () => {
    this.setState({
      dice1: "",
      dice2: "",
      dice3: "",
      dice4: "",
      dice5: "",
      rollsCount: 0,
      turnsCount: 0,
      turnScore: 0,
      totalScore: 0
    });
  };

  render() {
    return (
      <>
        <Interface
          rollsCount={this.state.rollsCount}
          turnsCount={this.state.turnsCount}
          clearState={this.clearState}
          rollDice={this.rollDice}
          endTurn={this.endTurn}
        />
        <div className="effects">
          <YourResult allstates={this.state} />
        </div>
        <Scoring
          totalScore={this.state.totalScore}
          turnScore={this.state.turnScore}
          rolledZero={this.rolledZero}
          updateTurnScore={this.updateTurnScore}
          overScored={this.overScored}
          dice1={this.state.dice1}
          dice2={this.state.dice2}
          dice3={this.state.dice3}
          dice4={this.state.dice4}
          dice5={this.state.dice5}
        />
      </>
    );
  }
}

export default App;
