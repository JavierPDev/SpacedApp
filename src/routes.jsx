import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { store } from './store';
import Main from 'Main';
import Home from 'Home';
import About from 'About';
import Login from 'Login';
import EventsList from 'EventsList';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="events" component={EventsList} onEnter={requireLogin} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

function requireLogin(nextState, replace, next) {
  const state = store.getState();

  if (!state.auth) {
    replace('/login');
  }

  next();
}
