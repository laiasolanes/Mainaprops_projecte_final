import { combineReducers } from 'redux';
import users from './usersReducer';
import tasksAndRewards from './tasksAndRewardsReducer';

const rootReducer = combineReducers({
  users,
  tasksAndRewards,
});

export default rootReducer;
