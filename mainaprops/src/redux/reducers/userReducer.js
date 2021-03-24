import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function reducer(user = initialState.user, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return action.dataUser;

    case actionTypes.UPDATE_CHALLENGE:
      return {
        ...user,
        challenges: user.challenges
          .map((challenge) => (challenge._id === action.challenge._id
            ? action.challenge
            : challenge)),
      };

    default:
      return user;
  }
}
