import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function userReducer(state = initialState.admin, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ADMIN:
      return { ...action.admin, isLogged: true };

    case actionTypes.LOG_OUT_ADMIN:
      return { isLogged: false };

    default:
      return state;
  }
}
