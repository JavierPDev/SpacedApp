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
          var events = resp.items;
          console.log('events', events);
          resolve(events);
      });
    });
  }) ;
}
