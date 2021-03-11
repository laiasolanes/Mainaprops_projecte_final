/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
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
    const response = await axios.post(url, { user_profile: newUser });
    const newUserData = response.data;
    debugger;
    dispatch({
      type: actionTypes.INSERT_USER,
      newUserData,
    });
  };
}

export function deleteUser(user) {
  return async function dispatchdeletedUser(dispatch) {
    const newUserData = await axios.delete(url, {

      data: {
        user,
      },
    });
    console.log('USEEEER', user._id);
    dispatch({
      type: actionTypes.DELETE_USER,
      payload: newUserData.data,
    });
  };
}

export function updateUser(updatedUser) {
  return async function dispatchUpdatedUser(dispatch) {
    const udatedUserData = await axios.put(url, { user_profile: updatedUser });

    dispatch({
      type: actionTypes.UPDATE_USER,
      udatedUserData,
    });
  };
}
