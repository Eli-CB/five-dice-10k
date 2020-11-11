import React from "react";
import { Game } from "./Game";
import { Interface } from "./Interface";
import { YourResult } from "./YourResult";
import { Ranking } from "./Ranking";
import "./App.css";

class App extends React.Component {
  draws = [];
  losses = [];
  wins = [];
  state = {
    games: 0,
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

  startGame = () => {
    this.setState({
      dice1: Math.floor(Math.random() * 6) + 1,
      dice2: Math.floor(Math.random() * 6) + 1,
      dice3: Math.floor(Math.random() * 6) + 1,
      dice4: Math.floor(Math.random() * 6) + 1,
      dice5: Math.floor(Math.random() * 6) + 1,
      games: this.state.games + 1
    });

  };

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.setState({
      dice1: "",
      dice2: "",
      dice3: "",
      dice4: "",
      dice5: "",
      games: 0
    });
  };

  render() {
    return (
      <>
        <Interface
          games={this.state.games}
          clearState={this.clearState}
          startGame={this.startGame}
          dice1={this.state.dice1}
          dice2={this.state.dice2}
          dice3={this.state.dice3}
          dice4={this.state.dice4}
          dice5={this.state.dice5}
        />
        <div className="effects">
          <YourResult allstates={this.state} />
        </div>
        <Game results={this.state} />
        <Ranking
          wins={this.wins}
          losses={this.losses}
          draws={this.draws}
          dice1={this.state.dice1}
          dice2={this.state.dice2}
          dice3={this.state.dice3}
          dice4={this.state.dice4}
          dice5={this.state.dice5}        />
      </>
    );
  }
}

export default App;
