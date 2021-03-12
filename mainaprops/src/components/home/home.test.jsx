import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import configureStore from '../../redux/store/configureStore';
import { HomeComponent } from './home';

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

  describe('When HomeComponent is rendered', () => {
    test('Then it should display an h2 with text Hola Familia', () => {
      const users = [{ user_profile: { name: '' } }];

      const actions = {
        loadUsers: jest.fn(),
      };

      act(() => {
        render(

          <BrowserRouter>
            <HomeComponent users={users} actions={actions} />
          </BrowserRouter>,

          container,
        );
      });

      const h2 = container.getElementsByTagName('h2');
      expect(h2[0].innerHTML).toBe('Hola Familia');
    });
  });
});
