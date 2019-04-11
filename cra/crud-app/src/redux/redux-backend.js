import { createStore } from "redux";

//actions
export const startGame = () => {
    return {
        type: "START_GAME"
    };
};

export const stopGame = () => {
  return {
      type: "STOP_GAME"
  };
};


export const setPlayerScore = score => {
    return {
        type: "SET_PLAYER_SCORE",
        score: score
    };
};

//reducer
const INITIAL_STATE = {
    score: 0,
    gameStarted: false,
    gameFinished: false
  };
  
  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "START_GAME":
        return {
          ...state,
          score: 1,
          gameStarted: true
        };

      case "STOP_GAME":
      return {
        ...state,
        score: 0,
        gameStarted: false
      };
  
      case "SET_PLAYER_SCORE":
        return {
          ...state,
          score: action.score
        };
      default:
        return state;
    }
};

//create the store
export const store = createStore(reducer);