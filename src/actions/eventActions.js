import { browserHistory } from 'react-router';

import { createSpacedEvent, deleteSpacedEvent } from '../api/events';
import { getCalendar } from '../api/calendars';
import { displayAlert } from 'alertActions';
import { displayLoadingIcon, hideLoadingIcon } from 'loadingIconActions';

export function updateNewEvent(event) {
  return {
    type: 'UPDATE_NEW_EVENT',
    event
  };
}

export function startEventCreation(event, dates, reminder) {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    return new Promise((resolve, reject) => {
      getCalendar()
        .then((calendar) => {
          return createSpacedEvent(calendar.id, event, dates, reminder)
            .then((createdEvents) => {
              dispatch(finishEventCreation(createdEvents));
              dispatch(hideLoadingIcon());
              dispatch(displayAlert('Event created'));

              resolve(createdEvents);
            }, () => {
              dispatch(hideLoadingIcon());
              dispatch(failEventCreation());
              dispatch(displayAlert('Request failed'));

              reject();
            });
        });
    });
  };
}

export function finishEventCreation() {
  return {
    type: 'FINISH_EVENT_CREATION'
  };
}

export function failEventCreation() {
  return {
    type: 'FAIL_EVENT_CREATION'
  };
}

export function startEventDeletion(event) {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    return new Promise((resolve, reject) => {
      getCalendar()
        .then((calendar) => {
          return deleteSpacedEvent(calendar.id, event)
            .then(() => {
              dispatch(finishEventDeletion());
              dispatch(hideLoadingIcon());
              dispatch(displayAlert('Event deleted'));

              resolve();
            }, () => {
              dispatch(hideLoadingIcon());
              dispatch(failEventDeletion());
              dispatch(displayAlert('Request failed'));

              reject();
            });
        });
    });
  };
}

export function finishEventDeletion() {
  return {
    type: 'FINISH_EVENT_DELETION'
  };
}

export function failEventDeletion() {
  return {
    type: 'FAIL_EVENT_DELETION'
  };
}
