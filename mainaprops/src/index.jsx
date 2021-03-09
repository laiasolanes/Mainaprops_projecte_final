import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import UsersList from './components/usersList/usersList';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <UsersList />
  </React.StrictMode>,
  document.getElementById('root'),
);
