import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { store } from './store';
import Main from 'Main';
import About from 'About';
import Login from 'Login';
import Test from 'Test';
import EventsList from 'EventsList';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={EventsList} />
      <Route path="about" component={About} />
      <Route path="events" component={EventsList} />
      <Route path="login" component={Login} />
      <Route path="test" component={Test} />
    </Route>
  </Router>
);
