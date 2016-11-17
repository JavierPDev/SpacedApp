const defaultState = {
  open: false,
  message: '',
  autoHideDuration: 3000
};

export default function alertReducer(state = defaultState, action) {
  switch (action.type) {
    case 'DISPLAY_ALERT':
      return {
        ...state,
        open: true,
        message: action.message
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
