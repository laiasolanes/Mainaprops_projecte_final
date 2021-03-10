import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:5000/api/users';

export default function loadUsers() {
  return async function dispatchUsersList(dispatch) {
    const response = await axios.get(url);
    const dataUsers = response.data;

    dispatch({
      type: actionTypes.LOAD_USERS,
      dataUsers,
    });
  };
}
