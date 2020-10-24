import React, { Component } from "react";
import ScoreKeeper from "./ScoreKeeper";
import Lottery from "./Lottery";
import CoinFlip from "./CoinFlip/CoinFlip";
import BoxContainer from "./ColorBoxes/BoxContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Game Spot!</h1>
        <Lottery />
        <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
        <ScoreKeeper />
        <CoinFlip />
        <h1>Match Color Boxes</h1>
        <BoxContainer />
      </div>
    );
  }
}

export default App;
