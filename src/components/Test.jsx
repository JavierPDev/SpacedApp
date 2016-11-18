import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

import { setAppbarTitle } from 'appbarTitleActions';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Test'));
  }

  render() {
    const date = moment().format('MMM DD YYYY');

    return (
      <div>
        <h1>Test</h1>
        <DatePicker hintText={date} />
        <p>Welcome!</p>
      </div>
    );
  }
}

export default connect()(Test);
