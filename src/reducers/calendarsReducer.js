export default function calendarsReducer(state = null, action) {
  switch (action.type) {
    case 'FINISH_CALENDAR_RETRIEVAL':
      return action.calendar;
    case 'FAIL_CALENDAR_RETREIVAL':
      return null;
    default:
      return state;
  }
}
