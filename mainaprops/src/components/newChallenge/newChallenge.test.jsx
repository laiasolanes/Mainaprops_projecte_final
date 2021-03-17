import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { NewChallengeComponent } from './newChallenge';

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
    test('Then it should display an h2 with text Crear repte', () => {
      const dataChallenge = [{ allTasks: [], allRewards: [] }];

      const actions = {
        loadDataChallenge: jest.fn(),
      };

      act(() => {
        render(

          <BrowserRouter>
            <NewChallengeComponent dataChallenge={dataChallenge} actions={actions} />
          </BrowserRouter>,

          container,
        );
      });

      const h2 = container.getElementsByTagName('h2');
      expect(h2[0].innerHTML).toBe('Crear repte');
    });
  });
});
