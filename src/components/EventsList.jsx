import React from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../api/events';
import AddEvent from 'AddEvent';
import { setAppbarTitle } from 'appbarTitleActions';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Events'));
  }

  retrieveEvents() {
  }

  render() {
    this.retrieveEvents();

    return (
      <div>
        <h1>Events List</h1>
        <p>This is the Events page</p>
        <AddEvent />
      </div>
    );
  }
}

export default connect()(EventsList);
