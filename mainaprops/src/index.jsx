import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModalView from './components/modalView';
import ButtonsExample from './components/buttonsExample';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ButtonsExample />
    <ModalView />
  </React.StrictMode>,
  document.getElementById('root'),
);
