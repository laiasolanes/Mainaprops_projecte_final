/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function usersReducer(state = [], action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return action.dataUsers;

    case actionTypes.INSERT_USER:
      return action.newUserData;

    case actionTypes.UPDATE_USER:
      return { ...state, ...action.udatedUserData };

    case actionTypes.DELETE_USER:
      return action.deletedUser;

    default:
      return state;
  }
}
