import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header/header';
import UsersList from './components/usersList/usersList';
import Home from './components/home/home';
import LogIn from './components/logIn/logIn';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={UsersList} />
        <Route path="/login" component={LogIn} />
      </Switch>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root'),
);
