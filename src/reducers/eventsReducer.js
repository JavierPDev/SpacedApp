import { FINISH_EVENTS_RETRIEVAL, FAIL_EVENTS_RETRIEVAL, CLEAR_EVENTS }
  from 'types';

export default function eventsReducer(state = null, action) {
  switch (action.type) {
    case FINISH_EVENTS_RETRIEVAL:
      return action.events;
    case FAIL_EVENTS_RETRIEVAL:
      return null;
    case CLEAR_EVENTS:
      return null;
    default:
      return state;
  }
}
