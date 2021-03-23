import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function selectedChallengeReducer(
  challenge = initialState.challengeSelected, action,
) {
  switch (action.type) {
    case actionTypes.UPDATE_SELECTED_CHALLENGE:
      return action.challenge;

    case actionTypes.UPDATE_COMPLETED_TASK:
      return {
        ...challenge,
        tasks: challenge.tasks.map((currentTask) => (currentTask._id === action.task._id
          ? {
            ...currentTask,
            times: {
              ...currentTask.times,
              current: currentTask.times.current + 1,
            },
          }
          : currentTask)),
      };

    case actionTypes.UPDATE_CHALLENGE:
      return action.challenge;

    default:
      return challenge;
  }
}
