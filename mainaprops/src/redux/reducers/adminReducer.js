import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function userReducer(admin = initialState.admin, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ADMIN:
      return { ...action.admin, isLogged: true };

    case actionTypes.LOG_OUT_ADMIN:
      return { isLogged: false };

    case actionTypes.INSERT_USER:
      return {
        ...admin,
        users: [...admin.users, action.newUserData],
      };

    case actionTypes.DELETE_USER:
      return {
        ...admin,
        users: admin.users.filter((user) => user._id !== action.userId),
      };

    default:
      return admin;
  }
}
