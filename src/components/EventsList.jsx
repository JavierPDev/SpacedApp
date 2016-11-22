import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Event from 'material-ui/svg-icons/action/event';

import { startEventsRetrieval } from 'eventsActions';
import AddEventButton from 'AddEventButton';
import { setAppbarTitle } from 'appbarTitleActions';
import EventListItem from 'EventListItem';

const noItemsStyle = {
  padding: '10px',
  minHeight: '50vh',
  textAlign: 'center'
};

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

    if (Array.isArray(events) && events.length) {
      return events.map((event) => {
        return <EventListItem key={event.spacedId} {...event} />;
      });
    } else if (Array.isArray(events) && !events.legnth) {
      return (
        <Card style={noItemsStyle}>
          <h2>No items</h2>
          <Link to="/events/new">
            <RaisedButton
              label="Add Spaced Event"
              primary={true}
              icon={<Event />}
            />
          </Link>
        </Card>
      );
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
