import { combineReducers } from 'redux';
import users from './usersReducer';
import user from './userReducer';
import dataChallenge from './dataChallengeReducer';
import challengeSelected from './selectedChallengeReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
  users,
  user,
  dataChallenge,
  admin,
  challengeSelected,
});

export default rootReducer;
