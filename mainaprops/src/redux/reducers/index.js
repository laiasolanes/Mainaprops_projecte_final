import { combineReducers } from 'redux';
import users from './usersReducer';
import dataChallenge from './dataChallengeReducer';
import challengeSelected from './selectedChallengeReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
  users,
  dataChallenge,
  admin,
  challengeSelected,
});

export default rootReducer;
