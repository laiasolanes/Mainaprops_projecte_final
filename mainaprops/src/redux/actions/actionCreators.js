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
    const confirmMessage = await axios.delete(url, {
      data: {
        user,
      },
    });

    if (confirmMessage.data === 'Deleted Ok') {
      dispatch({
        type: actionTypes.DELETE_USER,
        payload: user._id,
      });
    }
  };
}

export function updateUser(nameInput, ageInput, imageInput, userId) {
  return async function dispatchUpdatedUser(dispatch) {
    const updatedUserData = await axios.put(url,
      { user_profile: { name: nameInput, age: ageInput, image: imageInput }, _id: userId });
    debugger;
    console.log(updatedUserData.data);

    dispatch({
      type: actionTypes.UPDATE_USER,
      payload: updatedUserData.data,
    });
  };
}
