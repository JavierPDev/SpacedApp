export default function navReducers(state = {open: false}, action) {
  switch (action.type) {
    case 'TOGGLE_NAV_OPEN':
      return {open: !state.open};
    default:
      return state;
  }
}
