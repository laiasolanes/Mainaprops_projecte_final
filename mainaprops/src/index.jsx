import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import UsersList from './components/usersList/usersList';
import Home from './components/home/home';
import UserDetail from './components/userDetail/userDetail';
import LogIn from './components/logIn/logIn';
import store from './redux/store/configureStore';
import './styles/styles.css';
import NewChallenge from './components/newChallenge/newChallenge';
import AdminUsers from './components/adminUsers/adminUsers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={UsersList} />
          <Route path="/login" component={LogIn} />
          <Route path="/users/:id/newchallenge" exact component={NewChallenge} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/admin" component={AdminUsers} />
        </Switch>

      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
