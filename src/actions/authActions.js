import { browserHistory } from 'react-router';

import * as auth from '../auth/google';
import { startCalendarRetrieval } from 'calendarActions';
import { displayAlert } from 'alertActions';

export function startAuthCheck() {
  return (dispatch, getState) => {
    return auth.checkAuthorization()
      .then((authResult) => {
        dispatch(grantAuthorization(authResult));
        dispatch(startCalendarRetrieval());
      }, () => {
        dispatch(denyAuthorization());
      });
  };
}

export function startAuthFlow() {
  return (dispatch, getState) => {
    return auth.initiateAuthFlow()
      .then((authResult) => {
        dispatch(grantAuthorization(authResult));
        dispatch(startCalendarRetrieval());
        dispatch(displayAlert('Logged in'));
      }, () => {
        dispatch(denyAuthorization());
        dispatch(displayAlert('Couldn\'t login'));
      });
  };
}

export function grantAuthorization(authResult) {
  return {
    type: 'GRANT_AUTHORIZATION',
    authResult
  };
}

export function denyAuthorization() {
  browserHistory.push('/login');
  return {
    type: 'DENY_AUTHORIZATION'
  };
}

export function logout() {
  auth.logout();
  browserHistory.push('/login');

  return {
    type: 'LOGOUT'
  };
}
