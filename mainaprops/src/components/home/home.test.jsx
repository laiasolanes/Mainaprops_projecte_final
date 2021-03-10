import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home';
import configureStore from '../../redux/store/configureStore';
import { loadUsers } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Given a component Home', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('main');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When Home is rendered', () => {
    test('Then it should display an h2 with text Hola Familia', () => {
      // Arrange
      const initialState = {
        users: [],
      };
      const store = configureStore(initialState);

      const users = [{ user_profile: { name: '' } }];

      const actions = {
        loadUsers: jest.fn(),
      };

      loadUsers.mockImplementation(() => {

      });

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Home users={users} actions={actions} />
            </BrowserRouter>
          </Provider>,
          container,
        );
      });

      const h2 = container.getElementsByTagName('h2');
      expect(h2[0].innerHTML).toBe('Hola Familia');
    });
  });
});
