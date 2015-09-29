/* eslint-env browser */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import List from './components/List';
import Article from './components/Article';
import NotFound from './components/NotFound';
import { createHistory } from 'history';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={List} />
    <Route path="article/:id" component={Article} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default class Root extends React.Component {
  render() {
    return (
      <Router history={createHistory()}>
       {routes}
      </Router>
    );
  }
}
