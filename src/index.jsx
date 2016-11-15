import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import About from 'About';
import { routes } from './routes';
import { defaultAction } from 'defaultActions';

store.subscribe(() => {
  console.log('state', store.getState());
});

store.dispatch(defaultAction());

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
