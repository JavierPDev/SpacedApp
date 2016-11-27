const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const SCOPE = "https://www.googleapis.com/auth/calendar";

export function checkAuthorization() {
  return new Promise((resolve, reject) => {
    gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPE, immediate: true},
      (authResult) => {
        if (authResult && !authResult.error) {
          resolve(authResult);
        } else {
          reject();
        }
      });
  });
}

export function initiateAuthFlow() {
  return new Promise((resolve, reject) => {
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPE,
      immediate: false,
      authuser: -1
    },
      (authResult) => {
        if (authResult && !authResult.error) {
          resolve(authResult);
        } else {
          reject();
        }
      });
  });
}

export function logout() {
  gapi.auth.signOut();
}
