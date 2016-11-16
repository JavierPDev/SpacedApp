import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from 'Main';
import Home from 'Home';
import About from 'About';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)
