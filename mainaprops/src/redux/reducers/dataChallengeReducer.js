import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function dataChallengeReducer(state = initialState.dataChallenge, action) {
  if (action.type === actionTypes.LOAD_DATA_CHALLENGE) {
    return action.dataChallenge;
  }
  return state;
}
