import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import { updateNewEvent } from 'eventActions';
import HelpBlock from 'HelpBlock';

class InformationTab extends React.Component {
  constructor(props) {
    super(props);
    this.handleEventDescriptionChange = this.handleEventDescriptionChange.bind(this);
    this.handleEventSummaryChange = this.handleEventSummaryChange.bind(this);
  }

  handleEventDescriptionChange(event, value) {
    const newState = {...this.props.event, description: value};
    this.props.dispatch(updateNewEvent(newState));
  }

  handleEventSummaryChange(event, value) {
    const newState = {...this.props.event, summary: value};
    this.props.dispatch(updateNewEvent(newState));
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 push-sm-6">
            <HelpBlock style={{marginTop: 30}}>
              Enter your information here.
            </HelpBlock>
          </div>
          <div className="col-xs-12 col-sm-6 pull-sm-6">
            <TextField
              hintText="Enter title here"
              floatingLabelText="Title"
              name="title"
              value={this.props.event.summary}
              onChange={this.handleEventSummaryChange}
            />
            <br />
            <TextField
              hintText="Enter description here"
              floatingLabelText="Description"
              name="description"
              value={this.props.event.description}
              onChange={this.handleEventDescriptionChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    event: state.event
  };
})(InformationTab);
