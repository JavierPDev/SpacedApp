import { browserHistory } from 'react-router';

import { getSpacedEvents } from '../api/events';
import { getCalendar } from '../api/calendars';
import { displayAlert } from 'alertActions';
import { displayLoadingIcon, hideLoadingIcon } from 'loadingIconActions';

export function startEventsRetrieval() {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    getCalendar()
      .then((calendar) => {
        return getSpacedEvents(calendar.id)
          .then((events) => {
            dispatch(finishEventsRetrieval(events));
            dispatch(hideLoadingIcon());
          }, () => {
            dispatch(hideLoadingIcon());
            dispatch(failEventsRetrieval());
            dispatch(displayAlert('Request failed'));
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

export function clearEvents() {
  return {
    type: 'CLEAR_EVENTS'
  };
}
