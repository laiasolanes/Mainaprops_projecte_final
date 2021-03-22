import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function reducer(user = initialState.user, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return action.dataUser;

    case actionTypes.UPDATE_CHALLENGE:
      return {
        ...user,
        user_profile: {
          ...user.user_profile,
          challenges: user.user_profile.challenges
            .map((challenge) => (challenge._id === action.challenge._id
              ? action.challenge
              : challenge)),
        },
      };

    default:
      return user;
  }
}
