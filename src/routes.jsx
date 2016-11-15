import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Home from 'Home';
import About from 'About';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)
