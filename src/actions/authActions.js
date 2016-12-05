import { browserHistory } from 'react-router';

import * as auth from '../api/auth';
import { startCalendarRetrieval } from 'calendarActions';
import { displayAlert } from 'alertActions';
import { displayLoadingIcon, hideLoadingIcon } from 'loadingIconActions';
import { GRANT_AUTHORIZATION, DENY_AUTHORIZATION, LOGOUT } from 'types';

export function startAuthCheck() {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    return auth.checkAuthorization()
      .then((authResult) => {
        dispatch(grantAuthorization(authResult));
        dispatch(hideLoadingIcon());
      }, () => {
        dispatch(denyAuthorization());
        dispatch(hideLoadingIcon());
        dispatch(displayAlert('Not logged in'));
      });
  };
}

export function startAuthFlow() {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    return auth.initiateAuthFlow()
      .then((authResult) => {
        dispatch(grantAuthorization(authResult));
        dispatch(hideLoadingIcon());
        dispatch(displayAlert('Logged in'));
      }, () => {
        dispatch(denyAuthorization());
        dispatch(hideLoadingIcon());
        dispatch(displayAlert('Couldn\'t login'));
      });
  };
}

export function grantAuthorization(authResult) {
  return {
    type: GRANT_AUTHORIZATION,
    authResult
  };
}

export function denyAuthorization() {
  browserHistory.push('/login');
  return {
    type: DENY_AUTHORIZATION
  };
}

export function logout() {
  auth.logout();
  browserHistory.push('/login');

  return {
    type: LOGOUT
  };
}
