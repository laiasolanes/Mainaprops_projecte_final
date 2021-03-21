import usersReducer from './usersReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a userReducer function', () => {
  describe('When calling it with type LOAD USERS', () => {
    test('Then return users', () => {
      const state = { users: '' };
      const action = {
        type: actionTypes.LOAD_USERS,
        dataUsers: 'users',
      };
      const data = usersReducer(state, action);
      expect(data).toBe('users');
    });
  });
  describe('When calling it with type INSERT USER', () => {
    test('Then return new user', () => {
      const state = [{ user: '' }];
      const action = {
        type: actionTypes.INSERT_USER,
        newUserData: { user: 'new user' },

      };
      const data = usersReducer(state, action);
      expect(data).toEqual([{ user: '' }, { user: 'new user' }]);
    });
  });

  describe('When calling it with type CREATE_CHALLENGE', () => {
    test('Then return updated user', () => {
      const state = [{ users: { _id: 1 } }];
      const action = {
        type: actionTypes.CREATE_CHALLENGE,
        payload: { _id: 1, user: '' },

      };
      const data = usersReducer(state, action);
      expect(data).toEqual([{ users: { _id: 1 } }, { _id: 1, user: '' }]);
    });
  });

  describe('When calling it with type DELETE USER', () => {
    test('Then return state with 1 user', () => {
      const state = [{ _id: 1 }, { _id: 2 }];
      const action = {
        type: actionTypes.DELETE_USER,
        payload: [{ _id: 1 }],

      };
      const data = usersReducer(state, action);
      expect(data).toEqual([{ _id: 1 }, { _id: 2 }]);
    });
  });

  describe('When calling it with type LOAD USER', () => {
    test('Then return user', () => {
      const state = [{ user: '' }];
      const action = {
        type: actionTypes.LOAD_USER,
        dataUser: { user: 'new user' },

      };
      const data = usersReducer(state, action);
      expect(data).toEqual([{ user: '' }, { user: 'new user' }]);
    });
  });

  describe('When calling it without type', () => {
    test('Then return case default state', () => {
      const state = [{ user: '' }];
      const action = {};
      const data = usersReducer(state, action);
      expect(data).toEqual([{ user: '' }]);
    });
  });
});
