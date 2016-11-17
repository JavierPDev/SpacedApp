import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default function EventForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextField
        hintText="Enter title here"
        floatingLabelText="Title"
      />
      <br />
      <TextField
        hintText="Enter description here"
        floatingLabelText="Description"
      />
      <br />
      <FlatButton label="Submit" primary={true} type="submit"/>
    </form>
  );
}
