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
        <h1>About</h1>
        <p>This is the about page</p>
      </div>
    );
  }
}

export default connect()(About);
