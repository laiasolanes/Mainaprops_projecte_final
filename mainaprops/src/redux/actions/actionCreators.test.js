import axios from 'axios';
import actionTypes from './actionTypes';
import {
  loadUsers,
} from './actionCreators';
import configureStore from '../store/configureStore';

jest.mock('axios');

describe('Given a loadUsers function', () => {
  describe('When it is called', () => {
    let store;
    beforeEach(() => {
      store = configureStore();
    });
    test('Then axios is called', () => {
      axios.get = jest.fn();

      loadUsers();

      expect(axios.get).toHaveBeenCalled();
    });
    test('Then dispatch is called with the data returned from axios', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        dataUsers: 'name user',
      }));

      store.dispatch = jest.fn();

      const dispatchFunction = loadUsers();

      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_USERS,
        dataUsers: 'name user',
      });
    });
  });
});
