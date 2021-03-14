import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/user-event';
import { UsersListComponent } from './usersList';

jest.mock('../../redux/actions/actionCreators');

describe('Given a component UserListComponent', () => {
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

  describe('When UserListComponent is rendered', () => {
    test('Then it should display an h2 with text Fills', () => {
      const users = [{ user_profile: { name: '' } }];

      const actions = {
        loadUsers: jest.fn(),
        insertUser: jest.fn(),
        deleteUser: jest.fn(),
        updateUser: jest.fn(),
      };

      act(() => {
        render(

          <BrowserRouter>
            <UsersListComponent users={users} actions={actions} />
          </BrowserRouter>,

          container,
        );
      });

      const h2 = container.getElementsByTagName('h2');
      expect(h2[0].innerHTML).toBe('Fills');
    });
  });

  describe('When cliccked EditRoundedIcon', () => {
    test('Then it invoke selectUser', () => {
      const users = [{ user_profile: { name: '' } }];

      const actions = {
        loadUsers: jest.fn(),
        insertUser: jest.fn(),
        deleteUser: jest.fn(),
        updateUser: jest.fn(),
      };

      act(() => {
        render(

          <BrowserRouter>
            <UsersListComponent users={users} actions={actions} />
          </BrowserRouter>,

          container,
        );
      });

      const iconButton = document.querySelector('#prova');
      fireEvent.click(iconButton);
      const selectUser = jest.fn();
      expect(selectUser).toHaveBeenCalled();
    });
  });
});
