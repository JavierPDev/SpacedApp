import moment from 'moment';
import uuid from 'uuid';

/**
 * Get spaced events using google calendar api. Multiple calendar events with
 * the same spacedId represented as one spacedEvent, return all of such spaced
 * events.
 *
 * @param {String} calendarId - Google calendar id
 * @return {Promise} - Resolve with spaced events
 */
export function getSpacedEvents(calendarId) {
  return getGoogleCalendarEvents(calendarId)
    .then((events) => {
      let spacedEvents = [];
      let spacedIds = [];

      for (const event of events) {
        const descArray = event.description.split('\nSPACED_APP_DATA: ');
        const realDescription = descArray[0];
        const spacedAppData = JSON.parse(descArray[1]);
        const {spacedId} = spacedAppData;

        if (!spacedIds.includes(spacedId)) {
          spacedIds.push(spacedId);

          const spacedEvent = {
            ...event,
            spacedId,
            realDescription,
            dates: [event.start.date],
            eventIds: [event.id]
          };

          spacedEvents.push(spacedEvent);
        } else {
          for (const spacedEvent of spacedEvents) {
            if (spacedEvent.spacedId === spacedId) {
              spacedEvent.dates.push(event.start.date);
              spacedEvent.eventIds.push(event.id);
            }
          }
        }
      }

      return spacedEvents;
    }, () => null);
}

/**
 * Create multiple google calendar events using single spacedEvent data. All 
 * resulting events will have different dates (arg date). Each have the same 
 * spacedId saved in SPACED_APP_DATA json in event description.
 *
 * @param {String} calendarId - Google calendar id
 * @param {Object} event - Event data to save
 * @param {Array} dates - Array of dates that event will take place on
 * @param {Object} reminder - Method and minutes for reminder
 * @return {Promise} - Resolve with http response data
 */
export function createSpacedEvent(calendarId, event, dates, reminder) {
  let events = [];
  let promises = [];
  const spacedAppData = {spacedId: uuid()};

  for (const d of dates) {
    const date = moment(d).format('YYYY-MM-DD');

    let newEvent = {
      ...event,
      start: {date},
      end: {date},
      reminders: {useDefault: false},
      description: event.description
        +'\nSPACED_APP_DATA: '+JSON.stringify(spacedAppData)
    };

    if (reminder) {
      newEvent.reminders.overrides = [
        {method: reminder.method, minutes: reminder.minutes}
      ];
    }

    promises.push(createGoogleCalendarEvent(calendarId, newEvent));
  } 

  return Promise.all(promises);
}

/**
 * Delete spaced event by deleting all google calendar events it is made of.
 *
 * @param {String} calendarId - Google calendar id
 * @param {Object} spacedEvent - Spaced event with custom data
 * @return {Promise} - Resolve with data from all delete responses
 */
export function deleteSpacedEvent(calendarId, spacedEvent) {
  let promises = [];

  for (const eventId of spacedEvent.eventIds) {
    promises.push(deleteGoogleCalendarEvent(calendarId, eventId));
  }

  return Promise.all(promises);
}

function getGoogleCalendarEvents(calendarId) {
  const datetime = moment().format('YYYY-MM-DD')+'T'
    +moment().format('HH:mm')+':00'+moment().format('Z');

  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.list({
        'calendarId': calendarId,
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 2500,
        'timeMin': datetime,
        'orderBy': 'startTime'
      })
        .execute(function(resp) {
          const events = resp.items;
          console.log('events', events);
          resolve(events);
      });
    });
  });
}

function createGoogleCalendarEvent(calendarId, event) {
  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.insert({
        'calendarId': calendarId,
        'source': {
          title: 'SpacedApp',
          url: 'http://spaced.surge.sh'
        },
        ...event
      })
        .execute(function(savedEvent) {
          console.log('newly saved event', savedEvent);
          resolve(savedEvent);
      });
    });
  });
}

function deleteGoogleCalendarEvent(calendarId, eventId) {
  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.delete({
        'calendarId': calendarId,
        'eventId': eventId
      })
        .execute(function(res) {
          console.log('deleted res:', res);
          if (res.error) {
            reject(res);
          } else {
            resolve(res);
          }
      });
    });
  });
}
