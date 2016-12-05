import { FINISH_CALENDAR_RETRIEVAL, FAIL_CALENDAR_RETRIEVAL } from 'types';

export default function calendarsReducer(state = null, action) {
  switch (action.type) {
    case FINISH_CALENDAR_RETRIEVAL:
      return action.calendar;
    case FAIL_CALENDAR_RETRIEVAL:
      return null;
    default:
      return state;
  }
}
