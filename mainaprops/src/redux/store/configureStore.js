import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStatInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducer from '../reducers';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStatInvariant(), thunk)),

  );
}

export default configureStore();
