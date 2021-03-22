import actionTypes from './actionTypes';

export function updateCompletedTask(task) {
  return {
    type: actionTypes.UPDATE_COMPLETED_TASK,
    task,
  };
}

export function updateSelectedChallenge(challenge) {
  return {
    type: actionTypes.UPDATE_SELECTED_CHALLENGE,
    challenge,
  };
}
