export default function eventReducer(state = null, action) {
  switch (action.type) {
    case 'FINISH_EVENT_CREATION':
      return action.event;
    case 'FAIL_EVENT_CREATION':
      return null;
    case 'FINISH_EVENT_DELETION':
      return null;
    case 'FAIL_EVENT_DELETION':
      return null;
    default:
      return state;
  }
}
