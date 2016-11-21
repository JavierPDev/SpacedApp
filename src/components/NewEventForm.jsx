import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { setAppbarTitle } from 'appbarTitleActions';
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

    let data = {
      title: this.refs.title.input.value,
      description: this.refs.description.input.value
    };

    console.log('form data', data);
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

export default connect()(NewEventForm);
