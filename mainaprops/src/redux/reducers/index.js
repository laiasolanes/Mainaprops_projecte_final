import { combineReducers } from 'redux';
import users from './usersReducer';
import dataChallenge from './dataChallengeReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
  users,
  dataChallenge,
  admin,
});

export default rootReducer;
