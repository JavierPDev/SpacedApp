import { store } from '../store';

export function getEvents(calendarId) {
  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.list({
        'calendarId': calendarId,
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      })
        .execute(function(resp) {
          const events = resp.items;
          console.log('events', events);
          resolve(events);
      });
    });
  }) ;
}

export function createEvent(calendarId, event) {
  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.insert({
        'calendarId': calendarId,
        ...event
      })
        .execute(function(savedEvent) {
          console.log('newly saved event', savedEvent);
          resolve(savedEvent);
      });
    });
  }) ;
}

export function deleteEvent(calendarId, eventId) {
  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.delete({
        'calendarId': calendarId,
        'eventId': eventId
      })
        .execute(function(res) {
          console.log('deleted, res:', res);
          resolve(res);
      });
    });
  }) ;
}
