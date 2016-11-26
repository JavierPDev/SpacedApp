const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const SCOPE = "https://www.googleapis.com/auth/calendar";

export function checkAuthorization() {
  return new Promise((resolve, reject) => {
    gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPE, immediate: true},
      (authResult) => {
        if (authResult && !authResult.error) {
          console.log('authorized successfully');
          resolve(authResult);
        } else {
          console.log('not authorized');
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
          console.log('signed in successfully');
          resolve(authResult);
        } else {
          console.log('failed to sign in');
          reject();
        }
      });
  });
}

export function logout() {
  gapi.auth.signOut();
}
