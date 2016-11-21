import React from 'react';
import { connect } from 'react-redux';

import { startEventsRetrieval } from 'eventsActions';
import AddEventButton from 'AddEventButton';
import { setAppbarTitle } from 'appbarTitleActions';
import EventListItem from 'EventListItem';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Events'));
    this.props.dispatch(startEventsRetrieval());
  }

  renderList() {
    const {events} = this.props;

    if (events) {
      return events.map((event) => <EventListItem key={event.id} {...event} />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <AddEventButton />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    events: state.events
  };
})(EventsList);
