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
import configureStore from './store';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={App} />
    <Route path="*" component={NotFound} />
  </Route>
);

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={createHistory()}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

