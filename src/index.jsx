import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store } from './store';
import { routes } from './config/routes';
import { startAuthCheck } from 'authActions';
import { muiTheme } from './config/muiTheme';

import './main.scss';

console.log('gapi', gapi);

// Needed for onTouchTap for material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

store.dispatch(startAuthCheck());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      {routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
