/* eslint-env browser */
import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import App from './components/App';
import NotFound from './components/NotFound';
import { createHistory } from 'history';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import createRedux from './createStore';
import reducer from './reducers';

const store = createStore(reducer);

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={App} />
    <Route path="*" component={NotFound} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

