import Immutable from 'immutable';
import {
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE
} from '../constants/games';

const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
  switch (action.type) {
  // GET_GAMES_SUCCESS case return a new state with the fetched games in the state
    case GET_GAMES_SUCCESS: {
      return state.merge({ list: action.games });
    }
  // In case of failure it simplies returned a new empty state
    case GET_GAMES_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
}