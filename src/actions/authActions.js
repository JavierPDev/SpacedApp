import { browserHistory } from 'react-router';

import * as auth from '../auth/google';

export function startAuthCheck() {
  return (dispatch, store) => {
    return auth.checkAuthorization()
      .then((authResult) => {
        dispatch(grantAuthorization(authResult));
      }, () => {
        dispatch(denyAuthorization());
      });
  };
}

export function startAuthFlow() {
  return (dispatch, store) => {
    return auth.initiateAuthFlow()
      .then((authResult) => {
        dispatch(grantAuthorization(authResult));
        browserHistory.push('/events');
      }, () => {
        dispatch(denyAuthorization());
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
