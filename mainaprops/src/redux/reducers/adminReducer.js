import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function userReducer(state = initialState, action) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case actionTypes.LOGIN_ADMIN:
      return { ...action.admin, isLogged: true };

    case actionTypes.LOG_OUT_ADMIN:
      return { isLogged: false };

    case actionTypes.DELETE_ADMIN:
      return state;

    default:
      return state;
  }
}
