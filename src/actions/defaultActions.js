export function defaultAction() {
  return {
    type: 'DEFAULT'
  };
}

export function defaultAsyncAction() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
}
