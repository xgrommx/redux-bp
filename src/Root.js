/* eslint-env browser */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import List from './components/List';
import NotFound from './components/NotFound';
import { createHistory } from 'history';

import { Provider } from 'react-redux';
import store from './createStore';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={List} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <Router history={createHistory()}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
