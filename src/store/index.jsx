import * as redux from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer.jsx';
import navReducer from '../reducers/navReducer.jsx';
import calendarsReducer from '../reducers/calendarsReducer.jsx';

export const store = configureStore();

function configureStore() {
  const reducer = redux.combineReducers({
    nav: navReducer,
    auth: authReducer,
    calendar: calendarsReducer
  });

  // Setup for chrome redux devtools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  const store = redux.createStore(reducer, composeEnhancers(redux.applyMiddleware(thunk)));

  return store;
}
