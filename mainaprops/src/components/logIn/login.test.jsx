import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  BrowserRouter,
} from 'react-router-dom';
import LogIn from './logIn';

describe('given a component LogIn', () => {
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

  describe('When LogIn component is rendered', () => {
    test('Then it should add an h1 text Mainaprops', () => {
      act(() => {
        render(
          <BrowserRouter>
            <LogIn />
          </BrowserRouter>,
          container,
        );
      });
      const text = document.querySelector('h1');
      expect(text.innerHTML).toEqual('Mainaprops');
    });
  });
});
