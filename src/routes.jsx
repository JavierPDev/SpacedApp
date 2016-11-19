import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { store } from './store';
import App from 'App';
import About from 'About';
import Login from 'Login';
import Test from 'Test';
import EventsList from 'EventsList';
import NewEventForm from 'NewEventForm';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={EventsList} />
      <Route path="about" component={About} />
      <Route path="events" component={EventsList} onEnter={requireLogin} />
      <Route path="events/new" component={NewEventForm} onEnter={requireLogin} />
      <Route path="login" component={Login} />
      <Route path="test" component={Test} />
    </Route>
  </Router>
);

function requireLogin(nextState, replace, next) {
  const auth = store.getState().auth;
  if (!auth) {
    replace('/login');
  }
  next();
}
