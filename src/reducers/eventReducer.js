import moment from 'moment';

const defaultEvent = {
  dates: [
    moment().add(24*3, 'hours').toDate(),
    moment().add(24*7, 'hours').toDate(),
    moment().add(24*14, 'hours').toDate()
  ],
  description: '',
  reminderMethod: 'popup',
  reminderMinutes: 3 * 60,
  remindersEnabled: true,
  summary: ''
};

export default function eventReducer(state = defaultEvent, action) {
  switch (action.type) {
    case 'UPDATE_NEW_EVENT':
      return action.event;
    case 'FINISH_EVENT_CREATION':
      return {
        ...defaultEvent,
        createdSuccessfully: true
      };
    case 'FAIL_EVENT_CREATION':
      return {
        ...defaultEvent,
        createdSuccessfully: false
      };
    case 'FINISH_EVENT_DELETION':
      return defaultEvent;
    case 'FAIL_EVENT_DELETION':
      return defaultEvent;
    default:
      return state;
  }
}
