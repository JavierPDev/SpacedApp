import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store } from './store';
import About from 'About';
import { routes } from './routes';
import { startAuthCheck } from 'authActions';

import './main.scss';

console.log('gapi', gapi);

// Needed for onTouchTap for material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

store.dispatch(startAuthCheck());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
