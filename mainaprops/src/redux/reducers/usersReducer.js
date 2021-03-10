import actionTypes from '../actions/actionTypes';

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return action.dataUsers;

    default:
      return state;
  }
}
