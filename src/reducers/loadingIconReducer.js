export default function loadingIconReducer(state = false, action) {
  switch (action.type) {
    case 'DISPLAY_LOADING_ICON':
      return true;
    case 'HIDE_LOADING_ICON':
      return false;
    default:
      return state;
  }
}
