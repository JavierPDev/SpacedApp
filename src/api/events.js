export function getEvents() {
  gapi.client.load('calendar', 'v3', listEvents);
  console.log('trying to get events');
}

function listEvents() {
  gapi.client.calendar.events.list({
		'calendarId': 'primary',
		'showDeleted': false,
		'singleEvents': true,
		'maxResults': 10,
		'orderBy': 'startTime'
	})
    .execute(function(resp) {
      var events = resp.items;
      console.log('events', events);
	});
}
