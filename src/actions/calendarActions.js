import { browserHistory } from 'react-router';

import { getCalendar } from '../api/calendars';

export function startCalendarRetrieval() {
  return (dispatch, getState) => {
    return getCalendar()
      .then((calendar) => {
        dispatch(finishCalendarRetrieval(calendar));
      }, () => {
        dispatch(failCalendarRetrieval());
      });
  };
}

export function finishCalendarRetrieval(calendar) {
  return {
    type: 'FINISH_CALENDAR_RETRIEVAL',
    calendar
  };
}

export function failCalendarRetrieval(calendar) {
  return {
    type: 'FAIL_CALENDAR_RETRIEVAL',
    calendar
  };
}
