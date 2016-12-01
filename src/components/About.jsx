import React from 'react';
import { connect } from 'react-redux';

import { setAppbarTitle } from 'appbarTitleActions';

class About extends React.Component {
  componentDidMount() {
    this.props.dispatch(setAppbarTitle('About'));
  }

  render() {
    return (
      <div>
        <p>
          Spaced takes advantage of the <a href="https://en.wikipedia.org/wiki/Spaced_repetition">spaced repetition technique</a> by allowing the user to set multiple dates in google calendar for a single learning or review event. A reminder for all dates may also be set.
        </p>
      </div>
    );
  }
}

export default connect()(About);
