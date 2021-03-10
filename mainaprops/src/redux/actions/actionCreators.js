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
    const newUserData = await axios.post(url, { user_profile: newUser });

    dispatch({
      type: actionTypes.UPDATE_USER,
      newUserData,
    });
  };
}

export function deleteUser(user) {
  return async function dispatchdeletedUser(dispatch) {
    const deletedUser = await axios.delete(url, user);

    dispatch({
      type: actionTypes.DELETE_USER,
      deletedUser,
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
