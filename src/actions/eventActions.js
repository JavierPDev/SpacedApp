import { browserHistory } from 'react-router';

import { getEvents } from '../api/events';
import { getCalendar } from '../api/calendars';
import { displayAlert } from 'alertActions';
import { displayLoadingIcon, hideLoadingIcon } from 'loadingIconActions';

export function startEventsRetrieval() {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    getCalendar()
      .then((calendar) => {
        return getEvents(calendar.id)
          .then((events) => {
            dispatch(finishEventsRetrieval(events));
            dispatch(hideLoadingIcon());
          }, () => {
            dispatch(hideLoadingIcon());
            dispatch(failEventsRetrieval());
          });
      })
  };
}

export function finishEventsRetrieval(events) {
  return {
    type: 'FINISH_EVENTS_RETRIEVAL',
    events
  };
}

export function failEventsRetrieval() {
  return {
    type: 'FAIL_EVENTS_RETRIEVAL'
  };
}
