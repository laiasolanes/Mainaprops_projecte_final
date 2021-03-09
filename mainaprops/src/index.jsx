import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ModalView from './components/modalView';
// import ButtonsExample from './components/buttonsExample';
import Header from './components/header/header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <App />
    <ButtonsExample />
    <ModalView /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
