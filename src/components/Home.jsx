import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

import { setAppBarTitle } from 'appbarTitleActions';

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Home'));
  }

  render() {
    const date = moment().format('MMM DD YYYY');

    return (
      <div>
        <h1>Home</h1>
        <DatePicker hintText={date} />
        <p>Welcome!</p>
      </div>
    );
  }
}

export default connect()(Home);
