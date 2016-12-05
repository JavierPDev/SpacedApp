import { DISPLAY_LOADING_ICON, HIDE_LOADING_ICON } from 'types';

export function displayLoadingIcon() {
  return {
    type: DISPLAY_LOADING_ICON
  };
}

export function hideLoadingIcon() {
  return {
    type: HIDE_LOADING_ICON
  };
}
