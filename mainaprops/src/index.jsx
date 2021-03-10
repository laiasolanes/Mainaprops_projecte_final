import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import UsersList from './components/usersList/usersList';
import Home from './components/home/home';
import LogIn from './components/logIn/logIn';
import store from './redux/store/configureStore';
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={UsersList} />
          <Route path="/login" component={LogIn} />
        </Switch>

      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
