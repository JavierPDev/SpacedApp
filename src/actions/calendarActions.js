import { browserHistory } from 'react-router';

import { getCalendar } from '../api/calendars';
import { displayAlert } from 'alertActions';
import { displayLoadingIcon, hideLoadingIcon } from 'loadingIconActions';

export function startCalendarRetrieval() {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());
    return getCalendar()
      .then((calendar) => {
        dispatch(finishCalendarRetrieval(calendar));
        dispatch(hideLoadingIcon());
        if (calendar.isNew) {
          dispatch(displayAlert('Created new google calendar "SpacedApp"'));
        }
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

export function failCalendarRetrieval() {
  return {
    type: 'FAIL_CALENDAR_RETRIEVAL'
  };
}
