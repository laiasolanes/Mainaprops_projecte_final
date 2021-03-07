import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModalView from './components/modalView';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ModalView />
  </React.StrictMode>,
  document.getElementById('root'),
);
