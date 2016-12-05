import { SET_APPBAR_TITLE } from 'types';

export function setAppbarTitle(title) {
  return {
    type: SET_APPBAR_TITLE,
    title
  };
}
