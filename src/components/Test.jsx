import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

import EventForm from 'EventForm';
import { setAppbarTitle } from 'appbarTitleActions';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Test'));
  }

  submitForm(event) {
    event.preventDefault();
    console.log('form submit event', event.target);
  }

  render() {
    const date = moment().format('MMM DD YYYY');

    return (
      <div>
        <h1>Test</h1>
        <DatePicker hintText={date} />
        <EventForm handleSubmit={this.submitForm}/>
        <p>Welcome!</p>
      </div>
    );
  }
}

export default connect()(Test);
