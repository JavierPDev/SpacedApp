import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { setAppbarTitle } from 'appbarTitleActions';
import { startEventCreation } from 'eventActions';
import BackButton from 'BackButton';

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('New Event'));
  }

  handleSubmit(event) {
    event.preventDefault()

    const data = {
      summary: this.refs.title.input.value,
      description: this.refs.description.input.value,
    };

    const dates = [
      moment().add(24, 'hours').format('YYYY-MM-DD'),
      moment().add(72, 'hours').format('YYYY-MM-DD'),
      moment().add(120, 'hours').format('YYYY-MM-DD')
    ];

    this.props.dispatch(startEventCreation(data, dates))
      .then((res) => browserHistory.push('/events'));
  }

  render() {
    return (
      <div>
        <BackButton />
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Enter title here"
            floatingLabelText="Title"
            name="title"
            ref="title"
          />
          <br />
          <TextField
            hintText="Enter description here"
            floatingLabelText="Description"
            name="description"
            ref="description"
          />
          <br />
          <FlatButton label="Add New Event" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    event: state.event
  };
})(NewEventForm);
