import axios from 'axios';
import '../../firebase';
import firebase from 'firebase';
import actionTypes from './actionTypes';

const url = 'http://localhost:5000/api/users';
const adminApiUrl = 'http://localhost:5000/api/admin';

export function loginWithGoogle(history) {
  return async function dispatchUser(dispatch) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    try {
      const {
        user:
        {
          displayName,
          email,
          photoURL,
        },
      } = await firebase.auth().signInWithPopup(provider);

      const { data } = await axios.post(adminApiUrl, { name: displayName, email, image: photoURL });

      dispatch({
        type: actionTypes.LOGIN_ADMIN,
        admin: data,
      });

      history.push('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}

export function deleteAdmin(admin) {
  return async function dispatchAdmin(dispatch) {
    axios.delete(url, admin);
    dispatch({
      type: actionTypes.DELETE_ADMIN,
      payload: admin,
    });
  };
}

export function logout(history) {
  return async function dispatchLogOut(dispatch) {
    await firebase.auth().signOut();
    dispatch({
      type: actionTypes.LOG_OUT_ADMIN,
    });

    history.push('/login');
  };
}

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
      {
        user_profile:
        {
          name: nameInput,
          age: ageInput,
          image: imageInput,
        },
        _id: userId,
      });

    dispatch({
      type: actionTypes.UPDATE_USER,
      payload: updatedUserData.data,
    });
  };
}

export function userByParam(paramId) {
  return async function dispatchUsersByParam(dispatch) {
    const response = await axios.get(`${url}/${paramId}`);
    const dataUser = response.data;

    dispatch({
      type: actionTypes.LOAD_USER,
      dataUser,
    });
  };
}

export function loadDataChallenge(paramId) {
  return async function dispatchDataChallenge(dispatch) {
    const response = await axios.get(`${url}/${paramId}/newchallenge`);
    const dataChallenge = response.data;

    dispatch({
      type: actionTypes.LOAD_DATA_CHALLENGE,
      dataChallenge,
    });
  };
}

export function createChallenge(userId, challengeTasks, challengeReward) {
  return async function dispatchChallenge(dispatch) {
    const challengeUser = await axios.post(`${url}/${userId}/newchallenge`,
      {
        user_id: userId, tasks: challengeTasks, reward: challengeReward,
      });

    dispatch({
      type: actionTypes.CREATE_CHALLENGE,
      payload: challengeUser.data,
    });
  };
}

export function updateChallenge(userId, challenge) {
  return async function dispatchUpdatedChallenge(dispatch) {
    const { data } = await axios.put(`${url}/${userId}`, challenge);

    dispatch({
      type: actionTypes.UPDATE_CHALLENGE,
      challenge: data,
    });
  };
}
