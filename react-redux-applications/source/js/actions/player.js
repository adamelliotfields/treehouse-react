import * as PlayerActionTypes from '../actiontypes/player.js';

export const addPlayer = (name) => (
  {
    type: PlayerActionTypes.ADD_PLAYER,
    name: name
  }
);

export const removePlayer = (index) => (
  {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index: index
  }
);

export const updatePlayerScore = (index, score) => (
  {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index: index,
    score: score
  }
);

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index
  };
};
