export default function eventsReducer(state = null, action) {
  switch (action.type) {
    case 'FINISH_EVENTS_RETRIEVAL':
      return action.events;
    case 'FAIL_EVENTS_RETREIVAL':
      return null;
    case 'CLEAR_EVENTS':
      return null;
    default:
      return state;
  }
}
