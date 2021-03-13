import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { UserDetailComponent } from './userDetail';

jest.mock('../../redux/actions/actionCreators');

describe('Given a component UserDetail', () => {
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

  describe('When UserDetail is rendered', () => {
    test('Then it should display an h2 with text Hola Guerau', () => {
      const users = [{ user_profile: { name: Guerau' } }];

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

})