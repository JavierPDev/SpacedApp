const CALENDAR_NAME = 'SpacedApp';

export function getCalendar() {
  return new Promise((resolve,reject) => {
    gapi.client.load('calendar', 'v3', () => {
      console.log('GCALENDAR', gapi.client.calendar);
      gapi.client.calendar.calendarList.list()
        .execute(function(res) {
          const calendars = res.items;
          let appCalendar;

          for (const calendar of calendars) {
            if (calendar.summary === CALENDAR_NAME) {
              console.log('app calendar is', calendar);
              appCalendar = calendar;
            }
          }

          if (appCalendar) {
            resolve(appCalendar);
          } else {
            gapi.client.calendar.calendars.insert({summary: CALENDAR_NAME})
              .execute((res) => {
                console.log('created calendar', res);
                resolve(res);
              });
          }
        });
    });
  });
}
