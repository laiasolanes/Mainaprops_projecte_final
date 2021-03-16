import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS_AND_REWARDS:
      return action.dataTasksAndRewards;

    default:
      return state;
  }
}
