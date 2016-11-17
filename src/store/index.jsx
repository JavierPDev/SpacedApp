import * as redux from 'redux';
import thunk from 'redux-thunk';

import alertReducer from '../reducers/alertReducer.jsx';
import authReducer from '../reducers/authReducer.jsx';
import calendarsReducer from '../reducers/calendarsReducer.jsx';
import appbarTitleReducer from '../reducers/appbarTitleReducer.jsx';

export const store = configureStore();

function configureStore() {
  const reducer = redux.combineReducers({
    alert: alertReducer,
    appbarTitle: appbarTitleReducer,
    auth: authReducer,
    calendar: calendarsReducer
  });

  // Setup for chrome redux devtools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  const store = redux.createStore(reducer, composeEnhancers(redux.applyMiddleware(thunk)));

  return store;
}
