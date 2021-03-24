import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function usersReducer(users = initialState.users, action) {
  let newState;

  switch (action.type) {
    case actionTypes.LOGIN_ADMIN:
      return action.admin.users;

    case actionTypes.LOAD_USERS:
      return action.dataUsers;

    case actionTypes.INSERT_USER:
      return [...users, action.newUserData];

    case actionTypes.CREATE_CHALLENGE:
    case actionTypes.UPDATE_USER:
      newState = users.filter((user) => user._id !== action.payload._id);
      return [...newState, action.payload];

    case actionTypes.DELETE_USER:
      return users.filter((user) => user._id !== action.userId);

    default:
      return users;
  }
}
