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

  describe('When UserDetailComponent is rendered', () => {
    test('Then it should display an h3 with text Hola Guerau', () => {
      const users = { user_profile: { name: 'Guerau' } };

      const actions = {
        userByParam: jest.fn(),
      };

      act(() => {
        render(

          <BrowserRouter>
            <UserDetailComponent users={users} actions={actions} />
          </BrowserRouter>,

          container,
        );
      });

      const h3 = container.getElementsByTagName('h3');
      expect(h3[0].innerHTML).toBe('Hola<br>');
    });
  });
});
