import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:5000/api/users';

export function loadUsers() {
  return async function dispatchUsersList(dispatch) {
    const response = await axios.get(url);
    const dataUsers = response.data;

    dispatch({
      type: actionTypes.LOAD_USERS,
      dataUsers,
    });
  };
}

export function insertUser(newUser) {
  return async function dispatchNewUser(dispatch) {
    const newUserData = await axios.post(url, { user_profile: newUser });

    dispatch({
      type: actionTypes.UPDATE_USER,
      newUserData,
    });
  };
}
