import dataChallengeReducer from './dataChallengeReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a dataChallengeReducer function', () => {
  describe('When calling it with type LOAD DATA CHALLENGE', () => {
    test('Then return challenge', () => {
      const state = { dataChallenge: '' };
      const action = {
        type: actionTypes.LOAD_DATA_CHALLENGE,
        dataChallenge: 'challenges',
      };
      const data = dataChallengeReducer(state, action);
      expect(data).toBe('challenges');
    });
  });

  describe('When calling it with type CREATE CHALLENGE', () => {
    test('Then return challenge', () => {
      const state = { dataChallenge: '' };
      const action = {
        type: actionTypes.CREATE_CHALLENGE,
        payload: 'challenge',
      };
      const data = dataChallengeReducer(state, action);
      expect(data).toBe('challenge');
    });
  });

  describe('When calling it without type', () => {
    test('Then return case default state', () => {
      const state = { dataChallenge: '' };
      const action = {};
      const data = dataChallengeReducer(state, action);
      expect(data).toEqual({ dataChallenge: '' });
    });
  });
});
