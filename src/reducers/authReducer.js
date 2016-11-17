export default function authReducer(state = null, action) {
  switch (action.type) {
    case 'GRANT_AUTHORIZATION':
      return action.authResult;
    case 'DENY_AUTHORIZATION':
      return null;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}
