import React from "react";

import * as reduxbackend from "./redux/redux-backend";
import { connect } from "react-redux";

const StartButton = (props) => {
  return (
    <div>
      <button onClick={props.startGame}>Start Game</button>
    </div>
  );
}

const StopButton = (props) => {
  return (
    <div>
      <button onClick={props.stopGame}>Stop Game</button>
    </div>
  );
}

// const GameButton = (props) => {
//   return (
//     <div>
//       <button onClick={props.setPlayerScore}>Run Game</button>
//     </div>
//   );
// }

const App = (props) => {
    return (
      <div>
        <h1>The score is: {props.score}</h1>
        <StartButton startGame={props.startGame} />
        <StopButton stopGame={props.stopGame} />
        {/* <GameButton setPlayerScore={props.setPlayerScore} /> */}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    score: state.score
  };
};

const mapDispatchToProps = {
  startGame: reduxbackend.startGame,
  stopGame: reduxbackend.stopGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App, StopButton, StartButton);