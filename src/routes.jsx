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
      <Route path="events" component={EventsList} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);
