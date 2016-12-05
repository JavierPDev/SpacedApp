import { SET_APPBAR_TITLE } from 'types';

export default function appbarTitleReducer(state = 'Spaced', action) {
  switch (action.type) {
    case SET_APPBAR_TITLE:
      return action.title;
    default:
      return state;
  }
}
