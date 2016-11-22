import { browserHistory } from 'react-router';

import { createEvent, deleteEvent } from '../api/events';
import { getCalendar } from '../api/calendars';
import { displayAlert } from 'alertActions';
import { displayLoadingIcon, hideLoadingIcon } from 'loadingIconActions';

export function startEventCreation(event) {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    return new Promise((resolve, reject) => {
      getCalendar()
        .then((calendar) => {
          return createEvent(calendar.id, event)
            .then((createdEvent) => {
              console.log('action createdEvent', createdEvent);
              dispatch(finishEventCreation(createdEvent));
              dispatch(hideLoadingIcon());
              dispatch(displayAlert('Event created'));
              resolve(createdEvent);
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

export function finishEventCreation(event) {
  return {
    type: 'FINISH_EVENT_CREATION',
    event
  };
}

export function failEventCreation() {
  return {
    type: 'FAIL_EVENT_CREATION'
  };
}

export function startEventDeletion(eventId) {
  return (dispatch, getState) => {
    dispatch(displayLoadingIcon());

    return new Promise((resolve, reject) => {
      getCalendar()
        .then((calendar) => {
          return deleteEvent(calendar.id, eventId)
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
