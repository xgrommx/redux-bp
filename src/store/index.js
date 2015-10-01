/* global module, require */
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// falls silently if logger is not initialized
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(reducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
