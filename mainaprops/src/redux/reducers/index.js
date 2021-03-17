import { combineReducers } from 'redux';
import users from './usersReducer';
import dataChallenge from './dataChallengeReducer';

const rootReducer = combineReducers({
  users,
  dataChallenge,
});

export default rootReducer;
