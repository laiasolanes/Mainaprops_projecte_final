import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  BrowserRouter,
} from 'react-router-dom';
import Header from './header';

describe('given a component Header', () => {
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

  describe('When Header component is rendered', () => {
    test('Then it should add an logo image', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>,
          container,
        );
      });
      const image = document.querySelector('img');
      expect(image.src).toEqual('https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19');
    });
  });
});
