/* global module, require */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(reducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
