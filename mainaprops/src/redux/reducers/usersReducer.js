import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function usersReducer(state = initialState.users, action) {
  let newState;

  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return action.dataUsers;

    case actionTypes.INSERT_USER:
      return [...state, action.newUserData];

    case actionTypes.CREATE_CHALLENGE:
    case actionTypes.UPDATE_USER:
      newState = state.filter((user) => user._id !== action.payload._id);
      return [...newState, action.payload];

    case actionTypes.DELETE_USER:
      return state.filter((user) => user._id !== action.payload);

    case actionTypes.LOAD_USER:
      return [...state, action.dataUser];

    default:
      return state;
  }
}
